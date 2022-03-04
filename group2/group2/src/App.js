import logo from "react";
import axios from "axios";

import "./App.css";
//import './style.css';

//import Sensors from './sensors';
import Home from "./homepage";
import Tox from "./toxicitysensor";
import Maptox from "./mapoftoxicity";

import Login from "./login";
import main from "./main";

import cleanwater from ".assets/img/login-bg.jpg";
import location from "./images/location.PNG";

import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

//<Route path='/sensors' element={<Sensors/>}></Route>
function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route exact path="/home" element={<Homepage />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/tox" element={<Tox />}></Route>
          <Route path="/Maptox" element={<MapTox />}></Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
