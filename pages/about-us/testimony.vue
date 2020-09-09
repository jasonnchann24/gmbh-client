<template>
  <div>
    <section
      class="ceo-gmbh-features-events-area bg-img bg-overlay-9 section-padding-100-50"
      style="background-image: url('https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')"
      crossorigin="anonymous"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <span></span>
              <h4 class="wow fadeInUp" data-wow-delay="0.5s">
                {{ $t('testimonial.title') }}
              </h4>
              <p class="wow fadeInUp" data-wow-delay="0.6s">
                {{ $t('testimonial.subtitle') }}
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-for="(item, index) in $t('testimonial.posts')"
            :key="index"
            class="col-12 col-lg-6"
          >
            <div
              class="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig"
              :data-wow-delay="`${index * 0.06}s`"
            >
              <div class="feature-events-thumb">
                <img :src="item.image" style="border-radius: 15px" alt="" />
              </div>
              <div class="feature-events-content">
                <h5>{{ item.name }}</h5>
                <h6>{{ item.location }}</h6>
                <p>
                  {{ item.post }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TestimonyPage',
  head() {
    return {
      title: 'Testimony | CEO Travel GmbH'
    }
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  text-align: center;
  color: white;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 30px;
}

@media screen and (max-width: 768px) {
  .hero-text {
    font-size: 1.2em;
    letter-spacing: 10px;
  }
}
</style>
