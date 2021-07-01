<template>
  <div style="">
    <!-- ****** Footer Area Start ****** -->
    <footer
      class="site-footer bg-dark"
      style="position:relative; bottom: 0; width: 100%"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mt-50">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">About Us</h3>
              <p>
                CEO Trade & Travel GmbH is one of the leading Travel services
                and Tour operators in Germany with a representative contact in
                Jakarta Indonesia.
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-0 mb-lg-0 mt-50">
            <div class="row mb-0">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Navigations</h3>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li><nuxtLink to="/" tag="a">Home</nuxtLink></li>
                  <!-- <li>
                    <nuxtLink to="/ticketing" tag="a">Ticketing</nuxtLink>
                  </li> -->
                  <li>
                    <nuxtLink to="/packages" tag="a">Tour Packages</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink to="/photography-exploration" tag="a"
                      >Photography Exploration</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink to="/custom-tour" tag="a">Custom Tour</nuxtLink>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li>
                    <nuxtLink to="/about-us/contact" tag="a"
                      >Contact Us</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink to="/about-us/company-profile" tag="a"
                      >Company Profile</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink to="/about-us/gallery" tag="a">Gallery</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink to="/about-us/testimony" tag="a"
                      >Testimony</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink to="/blog" tag="a">Blog</nuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0 mt-50">
            <div class="row">
              <div class="col-12 text-center">
                <img
                  src="/images/new-logo-trade-travel-gmbh.png"
                  width="250"
                  height="250"
                  alt="logo ceo gmbh trade and travel"
                />
              </div>
              <div class="col-12 mt-2 text-center px-4">
                <p>
                  Umsatzsteuer-Identifikationsnummer (USt-IdNr.): DE330 266 333.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
            <p>
              Copyright &copy; | CEO Trade & Travel GmbH 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- ****** Footer Area End ****** -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
