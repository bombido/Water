import React, {useState} from 'react';

function Maptox ()

return (
<div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>CLEAN WATER - Home</title>
  {/* Favicons */}
  <link href="assets/img/" rel="icon" />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a href="homepage.html">CLEAN WATER</a>
      </h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto" href="homepage.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="about.html">
              About Us
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="active">
              <span>Services</span> <i className="bi bi-chevron-down" />
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
            <a className="nav-link scrollto" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* navbar */}
    </div>
  </header>
  {/*============= End Header ============*/}
  {/* ======= toxic map Section ======= */}
  <section id="map" className="d-flex align-items-center map">
    <div className="container">
      <div className="row">
        <div className="section-title mt-5">
          <h2>Map area</h2>
        </div>
        <div className="col-lg-12">
          <div className="map-image">
            <iframe
              src="https://www.securetransaction.uk/sas/map/map-code.php"
              width="100%"
              height="500px"
              style={{ display: "block", margin: "0" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End toxic map */}
  <main id="main">
    {/*========= Start Aleart key Section ===========*/}
    <section id="aleart-key" className="aleart-key">
      <div className="container">
        <div className="section-title">
          <h2>Alerts Key</h2>
          <p>Our Water Quality Measurement</p>
        </div>
        <div className="row content">
          <div className="col-lg-6 offset-lg-3">
            <div className="row">
              <div className="col-lg-3">
                <div className="aleart text-center">
                  <img src="assets/img/a1.png" alt />
                  <p>No water quality alearts in place</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="aleart text-center">
                  <img src="assets/img/a2.png" alt />
                  <p>Pollution risk warming in place</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="aleart text-center">
                  <img src="assets/img/a3.png" alt />
                  <p>Water quality data not availabale out of season</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="aleart text-center">
                  <img src="assets/img/watericon-4.png" alt />
                  <p>
                    Sewer systems in this location are under maintenance and the
                    water company has temporarilly disabled real-time alarts
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p>
                  The interactive map is our water quality measurement website
                  for tracking real-time CSOs(combined sewage overflows) and
                  PRFs(pollution risk forecasts). This monitors the water
                  quality at over 400 locations around Uk rivers and coastlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*========= End Mineral Composition Section ===========*/}
    {/* ======= Cta Take Action Section ======= */}
    <section id="cta" className="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Take Action</h3>
            <p>
              To get quality water measurement or to control water toxic areas,
              we will need you to take action with Us. You can join the team in
              finding more water toxic areas, or make a report concerning
              affected area that can lead to water pollution in your local.{" "}
            </p>
            <p>
              You are a Hero, drop a message now and let's get a quality water
              together.
            </p>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="cta-input">
                <input type="text" placeholder="Name" />
              </div>
              <div className="cta-input">
                <input type="email" placeholder="Email" />
              </div>
              <div className="cta-input">
                <textarea
                  name="textarea"
                  id
                  cols={30}
                  rows={10}
                  placeholder="Drop your Message"
                  defaultValue={""}
                />
              </div>
              <div className="cta-btn">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Cta Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer-copy" className>
    <div className="container footer-bottom clearfix">
      <div className="credits"></div>
    </div>
  </footer>
  {/* End Footer */}
  <div id="preloader" />
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>
 )

 export default Maptox;