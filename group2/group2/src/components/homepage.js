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
            <a className="nav-link scrollto active" href="homepage.html">
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
  {/*============ End Header ==========*/}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <h2>Water Quality Measurement</h2>
          <h1>
            Not Sure if your water is clean. Check your water quality with us.
          </h1>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="login.html" className="btn-get-started scrollto">
              Join Us
            </a>
            {/* <a href="#" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
          </div>
        </div>
        <div className="col-lg-6 text-center order-1 order-lg-2 hero-img">
          <img src="assets/img/cleanwater.jpg" className="img-fluid" alt />
        </div>
      </div>
    </div>
  </section>
  {/*=========== End Hero ==========*/}
  <main id="main">
    {/*========= Start Mineral Composition Section ===========*/}
    <section id="mineral" className="mineral section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Our Water Quality Measurement</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <div className="mineral-quality">
              <h4>TDS</h4>
              <p>
                Common total dissolved solids that may be present in your water
                are; Calcium, Chloride, Magnesium, Potassium, Zinc, Aluminum,
                Copper, Lead, Arsenic, Iron, Chlorine.
                <br />
                <b>50-250 ppm - Low:</b> Lacking minerals, such as calcium,
                magnesium, and zinc.
                <br />
                <b>300-500 ppm - Ideal:</b> This level is the sweet spot for TDS
                in drinking water. The water most likely contains minerals and
                does not taste flat.
                <br />
                <b>600-900 ppm - Not great:</b> Consider a reverse osmosis
                system to filter TDS.
                <br />
                <b>1000-2000 ppm - Bad:</b> It is not recommended to drink water
                at this TDS level.
              </p>
            </div>
            <div className="mineral-quality">
              <h4>PH</h4>
              <p>A safe pH range for a pond or a lake is between 6.0 to 8.0</p>
              <p>
                <span>Acidic water</span> has a pH <b>lower than</b> 7. The most
                acidic substances have a pH of 0. Battery acid falls into this
                category.
              </p>
              <p>
                <span>Alkaline water</span> has a pH of 8 or above. The most
                alkaline substances, such as lye, have a pH of 14.
              </p>
              <p>
                <span>Pure water</span> has a pH of 7 and is considered
                “neutral” because it has neither acidic nor basic qualities.{" "}
                <b>(Health Line 2019)</b>
              </p>
            </div>
            <div className="mineral-quality">
              <h4>Recording the Water temperature</h4>
              <p>
                Temperature is also important because of its influence on water
                chemistry. To sanitize water for drinking, the Environmental
                Protection Agency (EPA) recommends boiling the water for at
                least 1 minute, at altitudes up to 5,000 feet. At higher
                elevations, water should be boiled for 3 minutes So that's&nbsp;
                <b>212 degrees F (at sea level)</b>&nbsp;to reliably kill
                bacteria and pathogens to make water potable.{" "}
              </p>
              <p>
                The U.S. Food and Drug Administration recommends a minimum
                handwashing water temperature of&nbsp;
                <b>at least 38 degrees Celsius (100 degrees Fahrenheit)</b>
                &nbsp;to kill harmful bacteria to make water ok for drinking.
              </p>
            </div>
          </div>
          <div className="col-lg-6 right-content">
            <img src="assets/img/minarel.png" alt />
          </div>
        </div>
      </div>
    </section>
    {/*========= End Mineral Composition Section ===========*/}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Delivery Service</h2>
          <p>
            Are you unsure of your water quality or in need of a water warden ?
            Call us now or send us a messege{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>Kingston Ln, London, Uxbridge UB8 3BH</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call Us Now:</h4>
                <p>01895 274000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.html"
              method="post"
              role="form"
              className="html-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
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
</div>;
