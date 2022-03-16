

import React from 'react';
import axios from "axios";

import './App.css';
//import './style.css';


//import Sensors from './sensors';
import Homepage from './homepage';
import Tox from './toxicity'

import Login from './login';
import main from './main';

import cleanwater from './images/cleanwater.jpg';
import location from './images/location.PNG';


import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';

//<Route path='/sensors' element={<Sensors/>}></Route>
function App() {
  return (
    <Router>
    <React.Fragment>
            <Routes>
                <Route exact path='/home' element={<Homepage/>}></Route>
                
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/tox' element={<Tox/>}></Route>
            </Routes> 
    </React.Fragment>
    </Router>
  );
}

export default App;
