<div>
  {/*?php 
    include("function.php");

    $objcrud = new mycrud();

    // ===== add data condition ====== //
    if (isset($_POST['add_info'])) {
  $return_msg = $objcrud-*/}
  add_data($_POST);
  {"}"}
  ?&gt;
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
            <a href="#">
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
            <a className="nav-link scrollto active" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/*============ End Header =========*/}
  <main id="main">
    {/*========= Start Mineral Composition Section ===========*/}
    <section id="water-control" className="water-control">
      <div className="container">
        <div className="section-title mt-5 pt-4">
          <h2>Water Quality Control</h2>
        </div>
        <div className="row content">
          <div className="col-lg-12 text-center">
            <div className="contact-area">
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>Measure your water with us Now</span>
              </h2>
              <p className="c-text-1">
                <i>
                  Get in touch with us if you are not sure of your water
                  quality, and we will send our water wardens to you.
                </i>
              </p>
              <p className="c-text-2">
                If you are concerned about the quality of your drinking water,
                you should contact your water company in the first instance. A
                number for your water company can be found{" "}
                <a href="https://www.dwi.gov.uk/consumers/find-your-local-water-company/">
                  here
                </a>
                .
              </p>
              <p className="c-text-2">
                For general water quality enquiries or where your water company
                does not resolve a problem with your drinking water quality,
                please contact us using the details below:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*========= End Mineral Composition Section ===========*/}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact-background">
      <div className="container">
        <div className="row contact-area">
          <div className="col-lg-4">
            <div className="section-title">
              <h2>Get in touch!</h2>
            </div>
            <div className="contact-form">
              <form action method="post">
                <div className="py-2 text-success">
                  {/*?php if (isset($return_msg)) {echo $return_msg;} ?*/}
                </div>
                <div className="form-contact">
                  <input
                    type="text"
                    name="ct_name"
                    className
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-contact">
                  <input
                    type="email"
                    className
                    name="ct_email"
                    id="email"
                    placeholder="Enter your valid email address"
                    required
                  />
                </div>
                <div className="form-contact">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className
                    name="ct_msg"
                    rows={10}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="contact-us">
                  <button type="submit" name="add_info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-text-area">
              <h4 className="c-address">ADDRESS</h4>
              <p className="pb-2">
                <i>Kingston Ln, London, Uxbridge UB8 3PH</i>
              </p>
              <h4 className="c-call">CALL US</h4>
              <p className="pt-2">
                <a href="#" className="c-drink">
                  Drinking Water Inspectorate
                </a>
              </p>
              <p>
                <i>0300 068 6400</i>
              </p>
              <h4 className="c-brunel">Brunel London</h4>
              <p className="py-2">
                <a href="#" className="c-num">
                  01895 274000
                </a>
              </p>
              <h4 className="c-call pb-2">OPENING HOURS</h4>
              <p>
                Monday-Friday …. 10 am – 8 pm <br />
                Saturday, Sunday ……… Closed
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-map">
              <iframe
                className="embed-responsive-item"
                src="//maps.google.com/maps?output=embed&q=Brunel%20university%2CLondon&z=10&t=m"
                data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJydW5lbCUyMHVuaXZlcnNpdHklMkNMb25kb24lMjIlMkMlMjJ6b29tJTIyJTNBMTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQSUyMiUyMiU3RA=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
    {/*========= footer area start here ===========*/}
    <section id="footer" className="footer-area">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Drinking Water Inspectorate Contacts:</h2>
          </div>
          <div className="col-lg-4">
            <div className="c-ft-text">
              <p>For general water quality enquiries</p>
              <ul>
                <li>
                  <a href="#" className="env">
                    <img src="assets/img/envalop.png" alt />{" "}
                    dwi.enquiries@defra.gov.uk
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    <img src="assets/img/phone.png" alt /> 0300 068 6400
                  </a>
                </li>
                <li>
                  <a href="#" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="c-ft-text">
              <p>Drinking Water Quality Regulator </p>
              <p>
                <b>For Scotland (DWQR)</b>
              </p>
              <ul>
                <li>
                  <a href="#" className="env">
                    <img src="assets/img/envalop.png" alt />
                    regulator@dwqr.scot
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    <img src="assets/img/phone.png" alt />
                    ​0131 244 0190
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    <img src="assets/img/url.png" alt />
                    http://dwqr.scot/
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="c-ft-text">
              <p>
                <b>Northern Ireland</b> (DWINI)
              </p>
              <ul>
                <li>
                  <a href="#" className="env">
                    <img src="assets/img/envalop.png" alt />
                    dwi@daera-ni.gov.uk
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    <img src="assets/img/phone.png" alt />
                    028 9056 9282
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    <img src="assets/img/url.png" alt />
                    https://www.daerani.gov.uk/
                    <br />
                    topics/water/drinking-water
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-bt-text">
              <h3>Environment Agency (England) and Natural Resources Wales</h3>
              <p className="py-2">
                They are responsible for maintaining or improving the quality of
                fresh, marine, surface and underground water in England and
                Wales.
              </p>
              <p className="pb-2">
                Contact details :{" "}
                <span>
                  <b>Environment Agency</b>
                </span>
              </p>
              <p>
                Contact details :{" "}
                <span>
                  <b>Natural Resources Wales</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======= Footer ======= */}
    <footer id="footer-copy">
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
