package com.example.waterWarden.processes;


public class toxicityCalculator {
	double tdsLimitUpper=1001.142303;
	double tdsLimitLower=300;
	
	double ecLimitUpper=1001.142303;
	double ecLimitLower=300;

	double humanPHLower=6.5;
	double humanPHUpper=8;

	double marinePHLower=6;
	double marinePHUpper=11;

	double plantPHLower=6;
	double plantPHUpper=12;


	public boolean isToxic(double ph, double tds, double temp) 
	{
		if(ph>=humanPHUpper || ph<=humanPHLower) {return true;}
		if(tds>tdsLimitUpper) {return true;}
		return false;
	}

	public toxicityCalculator() {}
	
	public String generateReport(double ph, double tds, double temp) {
		String report ="";

		//General
		if (temp<=60 && temp<=5) {report = report + "Bacteria and other poisonous life can grow in the water at this temperature. Be sure to check the colour. Boil the water to be safe" + "\n";}
		if (temp>=60) {report = report + "Water of this temperature can cause burns!" + "\n";}
		if (tds>=tdsLimitUpper) {report = report +  "This water might have too many dissolved solvents!" + "\n";}

		//Humans
		if (ph>=humanPHUpper) {report = report + "Water is too alkaline for humans!" + "\n";}

		//Lead|Humans
		if (ph>=5) 
		{
			//Half way between the censors gradient of'marginally acceptable' and high tds
			if(tds>=250) 
			{
				report = report + "Water has an unusually high tds and the ph might indicate enough quantity of lead to be toxic!" + "\n";
			}
		}
		else if (ph<=humanPHLower)
		{

			report = report +  "Water is too acidic for humans!" + "\n";
		}

		//Fish
		if (ph>=marinePHUpper) {report = report + "Water is too alkaline for marine life!" + "\n";}
		else if (ph<=marinePHLower) {report = report +  "Water is too acidic for marine life!" + "\n";}
		//Plants
		if (ph>=plantPHUpper) {report = report + "Water is too alkaline for plant life!" + "\n";}
		else if (ph<=plantPHLower) {report = report +  "Water is too acidic for plant life!" + "\n";}

		//Farming Animals


		report= "Warning!" +"\n" + report;
		return report;

	}

}

