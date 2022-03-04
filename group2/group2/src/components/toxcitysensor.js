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
  <header
    id="header"
    className="fixed-top input-header"
    style={{ "background-color": "#fff" }}
  >
    <div className="container d-flex align-items-center">
      <h1 className="logo input-logo me-auto">
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
      {/* .navbar */}
    </div>
  </header>
  {/*=========== End Header ===========*/}
  <main id="main">
    {/*========= Start Mineral Composition Section ===========*/}
    <section id="water-control" className="water-control water-input-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="row content">
              <div className="col-lg-12 mt-5">
                <form action method="post" className="cl-bg">
                  <h3 className="text-center">Toxicity Scanner</h3>
                  <div className="cl-form">
                    <label htmlFor>pH</label>
                    <input type="number" />
                  </div>
                  <div className="cl-form">
                    <label htmlFor>TDS</label>
                    <input type="number" />
                  </div>
                  <div className="cl-form">
                    <label htmlFor>Temp</label>
                    <input type="number" />
                  </div>
                  <div className="cl-btn">
                    <input
                      type="submit"
                      defaultValue="Enter"
                      className="input-btn"
                    />
                    <a href="input.html" className="link-page">
                      Water Warden Input
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*========= End Mineral Composition Section ===========*/}
    {/* ======= Footer ======= */}
    <footer id="footer-copy" className>
      <div className="container footer-bottom clearfix">
        <div className="credits"></div>
      </div>
    </footer>
    {/* End Footer */}
  </main>
  {/* End #main */}
  <div id="preloader" />
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>;
