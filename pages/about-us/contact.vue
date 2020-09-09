<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-100">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_contact.title') }}</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50 text-center">
          <img
            src="/images/logo.png"
            alt="logo-ceo-gmbh"
            width="250"
            height="250"
          />
        </div>
        <div class="col-12 text-center mt-50">
          <h5 class="font-weight-bolder">
            Bergstrasse 19, 21481 Schnakenbek. Germany.
          </h5>
          <h5 class="font-weight-bolder mt-2">
            <a href="mailto:ceotravelweb@gmail.com" target="_blank">
              <i class="fa fa-envelope"></i> ceotravelweb@gmail.com
            </a>
          </h5>
          <h5 class="font-weight-bolder mt-2 mb-100">
            <a href="https://wa.me/6281389158787" target="_blank">
              <i class="fa fa-phone"></i> +62 813 8915 8787 (Indo.Contact)
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head() {
    return {
      title: 'Contact Us | CEO Travel GmbH'
    }
  }
}
</script>

<style></style>
