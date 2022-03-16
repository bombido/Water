import React from 'react';

import './singlePageTemplate.module.css';

import cleanwater from './images/cleanwater.jpg';
import location from './images/location.PNG';

const homepage = () => {
    return(
        <div>
            <head>
      
      <title>CleanWater</title>
      <link href="css/singlePageTemplate.css" rel="stylesheet" type="text/css"></link>
      <script>var __adobewebfontsappname__="dreamweaver"</script>
      <script src="http://use.edgefonts.net/source-sans-pro:n2:default.js" type="text/javascript"></script>
      
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      </head>
      <body>
      <div class="container"> 
        <header> <a href="">
          <h4 class="logo">CLEAN WATER</h4>
          </a>
          <nav>
            <ul>
              <li><a href="#hero">HOME</a></li>
               
                
                <div class="dropdown" style = {
              {bg:'04AA6D',
        color: 'black',
        padding: '16px',
        fs:'16px',
        border:'none'}
        }>
        <button>SERVICES</button>
        <div class="dropdown-content">
          <a href="Sensors_group_project.html">Input Sensors</a>
          <a href="#">Map of toxic areas</a>
          <a href="#"></a>
        </div>
      </div>
              <li><a href="#about">ABOUT</a></li>
              <li> <a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
        </header>
        <section class="hero" id="hero">
          <h2 class="hero_header">PURE WATER<span class="light"></span></h2>
          <p class="tagline">MAKING THE WORLD A BETTER PLACE</p>
            <p class="tagline">What do we offer?</p>
        </section>
        <section class="about" id="about">
          <h2 class="hidden">About</h2>
          <p class="text_column">HERE WILL BE TEXT ABOUT OUR SERVICES</p>
          <p class="text_column">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <p class="text_column">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </section>
      
        <footer>
          <article class="footer_column">
            <h3>ABOUT</h3>
            <img src = {cleanwater} alt="" width="400" height="200" class="cards"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
          </article>
          <article class="footer_column">
            <h3>LOCATION</h3>
            <img src= {location} alt="" width="400" height="200" class="cards"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
          </article>
        </footer>
        <section class="footer_banner" id="contact">
          <h2 class="hidden">Footer Banner Section </h2>
            <p class="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
              <p class="hero_header">CLick subscribe and enter your email !&nbsp;</p>
          <div class="button">subscribe</div>
        </section>
      </div>
      </body>
        </div>);
        }

export default homepage;