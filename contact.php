<?php 
    include("function.php");

    $objcrud = new mycrud();

    // ===== add data condition ====== //
    if (isset($_POST['add_info'])) {
        $return_msg = $objcrud->add_data($_POST);
    }

 ?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>CLEAN WATER - Index</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/" rel="icon">

  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.php">CLEAN WATER</a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="index.php">Home</a></li>
          <li><a class="nav-link scrollto" href="about.php">About Us</a></li>
          <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="input.php">Input Sensors</a></li>
              <li><a href="mapoftoxicarea.php">Map of toxic areas</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto active" href="contact.php">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
  <!--============ End Header =========-->


  <main id="main">




    <!--========= Start Mineral Composition Section ===========-->
    <section id="water-control" class="water-control">
      <div class="container">

        <div class="section-title mt-5 pt-4">
          <h2>Water Quality Control</h2>
        </div>

        <div class="row content">
          <div class="col-lg-12 text-center">
            <div class="contact-area">
              <h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>Measure your water with us Now</span></h2>
              <p class="c-text-1"><i>Get in touch with us if you are not sure of your water quality, and we will send
                  our water wardens to you.</i></p>
              <p class="c-text-2">If you are concerned about the quality of your drinking water, you should contact your
                water company in the first instance. A number for your water company can be found <a href="https://www.dwi.gov.uk/consumers/find-your-local-water-company/">here</a>.
              </p>
              <p class="c-text-2">For general water quality enquiries or where your water company does not resolve a
                problem with your drinking water quality, please contact us using the details below:</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!--========= End Mineral Composition Section ===========-->


    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact-background">
      <div class="container">

        <div class="row contact-area">
          <div class="col-lg-4">
            <div class="section-title">
              <h2>Get in touch!</h2>
            </div>
            <div class="contact-form">
              <form action="" method="post">
                <div class="py-2 text-success"><?php if (isset($return_msg)) {echo $return_msg;} ?></div>
                <div class="form-contact">
                  <input type="text" name="ct_name" class="" id="name" placeholder="Enter your name" required>
                </div>
                <div class="form-contact">
                  <input type="email" class="" name="ct_email" id="email" placeholder="Enter your valid email address"
                    required>
                </div>
                <div class="form-contact">
                  <label for="name">Message</label>
                  <textarea class="" name="ct_msg" rows="10" required></textarea>
                </div>
                <div class="contact-us"><button type="submit" name="add_info">Submit</button></div>
              </form>


            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-text-area">
              <h4 class="c-address">ADDRESS</h4>
              <p class="pb-2"><i>Kingston Ln, London, Uxbridge UB8 3PH</i></p>
              <h4 class="c-call">CALL US</h4>
              <p class="pt-2"><a href="#" class="c-drink">Drinking Water Inspectorate</a></p>
              <p><i>0300 068 6400</i></p>
              <h4 class="c-brunel">Brunel London</h4>
              <p class="py-2"><a href="#" class="c-num">01895 274000</a></p>
              <h4 class="c-call pb-2">OPENING HOURS</h4>
              <p>Monday-Friday …. 10 am – 8 pm <br>
                Saturday, Sunday ……… Closed</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-map">
              <iframe class="embed-responsive-item"
                src="//maps.google.com/maps?output=embed&amp;q=Brunel%20university%2CLondon&amp;z=10&amp;t=m"
                data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJydW5lbCUyMHVuaXZlcnNpdHklMkNMb25kb24lMjIlMkMlMjJ6b29tJTIyJTNBMTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQSUyMiUyMiU3RA=="></iframe>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Contact Section -->


    <!--========= footer area start here ===========-->
    <section id="footer" class="footer-area">
      <div class="container">

        <div class="row">
          <div class="section-title">
            <h2>Drinking Water Inspectorate Contacts:</h2>
          </div>
          <div class="col-lg-4">
            <div class="c-ft-text">
              <p>For general water quality enquiries</p>
              <ul>
                <li><a href="#" class="env"><img src="assets/img/envalop.png" alt=""> dwi.enquiries@defra.gov.uk</a>
                </li>
                <li><a href="#" class="phone"><img src="assets/img/phone.png" alt=""> 0300 068 6400</a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="c-ft-text">
              <p>Drinking Water Quality Regulator </p>
              <p><b>For Scotland (DWQR)</b></p>
              <ul>
                <li><a href="#" class="env"><img src="assets/img/envalop.png" alt="">regulator@dwqr.scot</a></li>
                <li><a href="#" class="phone"><img src="assets/img/phone.png" alt="">​0131 244 0190</a></li>
                <li><a href="#" class="phone"><img src="assets/img/url.png" alt="">http://dwqr.scot/</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="c-ft-text">
              <p><b>Northern Ireland</b> (DWINI)</p>
              <ul>
                <li><a href="#" class="env"><img src="assets/img/envalop.png" alt="">dwi@daera-ni.gov.uk</a></li>
                <li><a href="#" class="phone"><img src="assets/img/phone.png" alt="">028 9056 9282</a></li>
                <li><a href="#" class="phone"><img src="assets/img/url.png" alt="">https://www.daerani.gov.uk/
                    <br>topics/water/drinking-water</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="footer-bt-text">
              <h3>Environment Agency (England) and Natural Resources Wales</h3>
              <p class="py-2">They are responsible for maintaining or improving the quality of fresh, marine, surface
                and underground water in England and Wales.</p>
              <p class="pb-2">Contact details : <span><b>Environment Agency</b></span></p>
              <p>Contact details : <span><b>Natural Resources Wales</b></span></p>
            </div>
          </div>
        </div>

      </div>
    </section>



    <!-- ======= Footer ======= -->
    <footer id="footer-copy">
      <div class="container footer-bottom clearfix">
        <div class="copyright">
          &copy; Copyright <strong><span>Water</span></strong>. All Rights Reserved
        </div>
        <div class="credits">

        </div>
      </div>
    </footer><!-- End Footer -->

  </main><!-- End #main -->



  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>