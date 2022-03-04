from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("homepage.html")

def Scanner(pH, TDS, Temp):
    pHHumanUpper = 9
    pHHumanLower = 5
    pHMarineUpper = 8
    pHMarineLower = 6
    pHPlantUpper = 9
    pHPlantLower = 7
    TDSUpperLimit = 275
    report = ""
    #General
    if Temp <= 60 and Temp >=5:
        report += "Bacteria and other poisonous life can grow in the water at this temperature. Be sure to check the colour. \n"
    elif Temp >= 60:
        report += "Water can cause burns at this temperature! \n"
    
    if TDS >= TDSUpperLimit:
        report += "This water might have too many dissolved solvents! \n"

    #Humans
    if pH >= pHHumanUpper:
        report += "Water is too alkaline for humans! \n"
    elif pH <= pHHumanLower:
        report += "Water is too acidic for humans! \n"

    if pH >= 5 and TDS >= 250:
        report += "Water has an unusually high TDS and the pH might indicate enough quantity of lead to be toxic! \n"
    
    #Fish
    if pH >= pHMarineUpper:
        report += "Water is too alkaline for marine life! \n"
    elif pH <= pHMarineLower:
        report += "Water is too acidic for marine life! \n"
    
    #Plants
    if pH >= pHPlantUpper:
        report += "Water is too alkaline for plant life! \n"
    elif pH <= pHPlantLower:
        report += "Water is too acidic for plant life! \n"

    #Farming animals

    if report != "":
        report = "Warning! " + report
    else:
        report = "No issues found with water."
    return report


@app.route("/toxicity", methods=["GET","POST"])
def toxicity():
    if request.method == "POST":
        userPH = float(request.form["phIn"])
        userTDS = float(request.form["tdsIn"])
        userTemp = float(request.form["tempIn"])
        result = Scanner(userPH, userTDS, userTemp)
        return render_template("toxicity.html", result=result)
    return render_template("toxicity.html", result=None)

@app.route("/login")
def login():
    return render_template("login.html")
