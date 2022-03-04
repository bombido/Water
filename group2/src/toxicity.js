import React, {useState} from 'react';
import axios from "axios";
import {useNavigate, Navigate} from 'react-router-dom';


const baseURL = "http://localhost:8080/tox";

function  Toxicity () {

    const [ph, setPH] = useState(String);
    const [temp, setTemp] = useState(String);
    const [tds, setTDS] = useState(String);
    const [output, setOutput] = useState('Output');


    const onSubmit = (event) => {
        event.preventDefault();
    
    axios.post(baseURL, {
		ph: ph,
        tds: tds,
        temp: temp
	  })
	  .then(function (response) {
		const content = response.data;
                    //redirect logic
                    if (response.status == 200) {
                            setOutput(content);
                    }
	  })
	  .catch(function (error) {
		console.log(error);
	  });
    }

return (
<div>
<head>
        <meta charset="utf-8"></meta>
        <title>Toxicity Scanner</title>
        <link rel="stylesheet" type="text/css" href="{{ url_for('static',filename='styles/tstyles.css') }}"></link>
    </head>
    <body>
        <header>
            <h1>Toxicity Scanner</h1>
        </header>
            <main>
                <form class="user-inputs" onSubmit={onSubmit}>
                    <label for="phIn">pH</label>
                    <input type= "text" id="phIn" name="phIn" onChange ={e => setPH(e.target.value)}></input>
                    <label for="tdsIn">TDS</label>
                    <input type="text" id="tdsIn" name="tdsIn" onChange ={e => setTDS(e.target.value)}></input>
                    <label for="tempIn">Temp</label>
                    <input type="text" id="tempIn" name="tempIn" onChange ={e => setTemp(e.target.value)}></input>
                    <input type="submit" id="submit" value="Enter"></input>
                </form>

                <div><p>{output}</p></div>
        </main>
    </body>
    </div>);
}

    export default Toxicity;