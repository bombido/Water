import React from "react";

import "./styles.css";

import cleanwater from ".assets/img/login-bg.jpg";

const homepage = () => {
  return (
    <div>
      <head>
        <title>CleanWater</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css"></link>
        <script>var __adobewebfontsappname__="dreamweaver"</script>
        <script
          src="http://use.edgefonts.net/source-sans-pro:n2:default.js"
          type="text/javascript"
        ></script>

        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      </head>
      <body>
        <header id="header" class="fixed-top ">
          <div class="container d-flex align-items-center">
            <h1 class="logo me-auto">
              <a href="index.html">CLEAN WATER</a>
            </h1>
            <nav id="navbar" class="navbar">
              <ul>
                <li>
                  <a class="nav-link scrollto active" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="about.html">
                    About Us
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Services</span> <i class="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="input.html">Input Sensors</a>
                    </li>
                    <li>
                      <a href="mapoftoxicarea.html">Map of toxic areas</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="nav-link scrollto" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
        <div>
          <section class="hero" id="hero">
            <h2 class="hero_header">
              PURE WATER<span class="light"></span>
            </h2>
            <p class="tagline">MAKING THE WORLD A BETTER PLACE</p>
            <p class="tagline">What do we offer?</p>
          </section>

          <footer>
            <article class="footer_column">
              <h3>ABOUT</h3>
              <img
                src={cleanwater}
                alt=""
                width="400"
                height="200"
                class="cards"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla{" "}
              </p>
            </article>
            <article class="footer_column">
              <h3>LOCATION</h3>
              <img
                src={location}
                alt=""
                width="400"
                height="200"
                class="cards"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla{" "}
              </p>
            </article>
          </footer>
          <section class="footer_banner" id="contact">
            <h2 class="hidden">Footer Banner Section </h2>
            <p class="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
            <p class="hero_header">
              CLick subscribe and enter your email !&nbsp;
            </p>
            <div class="button">subscribe</div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default homepage;
