<template>
  <div>
    <!-- ****** Footer Area Start ****** -->
    <footer
      class="site-footer bg-dark"
      style="position:relative; bottom: 0; width: 100%"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mt-50">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">{{ $t('nav.about_us') }}</h3>
              <p>
                {{ $t('about_us_short') }}
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-0 mb-lg-0 mt-50">
            <div class="row mb-0">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">
                  {{ $t('footer.navigations') }}
                </h3>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li>
                    <nuxtLink :to="localePath('/')" tag="a">{{
                      $t('nav.home')
                    }}</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink :to="localePath('/ticketing')" tag="a">{{
                      $t('nav.ticketing')
                    }}</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink :to="localePath('/packages')" tag="a">{{
                      $t('nav.tour_packages')
                    }}</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink
                      :to="localePath('/photography-exploration')"
                      tag="a"
                      >{{ $t('nav.photography_exploration') }}</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink :to="localePath('/custom-tour')" tag="a">{{
                      $t('nav.custom_tour')
                    }}</nuxtLink>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li>
                    <nuxtLink :to="localePath('/about-us/contact')" tag="a">{{
                      $t('nav.contact_us')
                    }}</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink
                      :to="localePath('/about-us/company-profile')"
                      tag="a"
                      >{{ $t('nav.company_profile') }}</nuxtLink
                    >
                  </li>
                  <li>
                    <nuxtLink :to="localePath('/about-us/gallery')" tag="a">{{
                      $t('nav.gallery')
                    }}</nuxtLink>
                  </li>
                  <li>
                    <nuxtLink :to="localePath('/about-us/testimony')" tag="a">{{
                      $t('nav.testimony')
                    }}</nuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0 mt-50">
            <div class="row">
              <div class="col-12 text-center">
                <img src="/images/logo.png" width="250" height="250" alt="" />
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
              Copyright &copy; | CEO Travel GmbH 2020
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
