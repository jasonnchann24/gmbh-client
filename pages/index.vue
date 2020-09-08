<template>
  <div>
    <!-- ***** Welcome Area Start ***** -->
    <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
      <div
        id="carousel-toggler"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-touch="true"
      >
        <ol class="carousel-indicators mb-auto">
          <li
            data-target="#carousel-toggler"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-toggler" data-slide-to="1"></li>
          <li data-target="#carousel-toggler" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div
            class="carousel-item active"
            style="background-image: url('https://images.unsplash.com/photo-1473615695634-d284ec918736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')"
            crossorigin="anonymous"
          >
            <div class="carousel-caption" style="backdrop-filter: blur(1.5px)">
              <h1 class=" text-white d-none d-md-block font-weight-bold">
                CEO Travel GmbH
              </h1>
              <p class="lead text-white font-weight-bold">
                Explore World. Beyond Words.
              </p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://images.unsplash.com/photo-1520681979516-e3c118ef971f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); "
            crossorigin="anonymous"
          >
            <div class="carousel-caption" style="backdrop-filter: blur(1.5px)">
              <h1 class=" text-white d-none d-md-block font-weight-bold">
                CEO Travel GmbH
              </h1>
              <p class="lead text-white font-weight-bold">
                Explore World. Beyond Words.
              </p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://images.unsplash.com/photo-1579863197600-9f2bc8b3e66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')"
            crossorigin="anonymous"
          >
            <div class="carousel-caption" style="backdrop-filter: blur(1.5px)">
              <h1 class=" text-white d-none d-md-block font-weight-bold">
                CEO Travel GmbH
              </h1>
              <p class="lead text-white font-weight-bold">
                Explore World. Beyond Words.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carousel-toggler"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-toggler"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- ***** Welcome Area End ***** -->

    <!-- ***** About Area Start ***** -->
    <section class="ceo-gmbh-about-area section-padding-0-100 pb-0 mt-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-content text-center">
              <h3
                class="font-weight-bold wow fadeInUpBig"
                data-wow-delay="0.5s"
              >
                {{ $t('home.main_header') }}
                <br />
                <span>CEO Travel GmbH </span>
              </h3>
              <p
                class="wow fadeIn mt-50"
                data-wow-delay="0.8s"
                data-wow-duration="0.5s"
              >
                {{ $t('home.description_header') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** About Area End ***** -->

    <!-- ***** Catagory Area Start ***** -->
    <section class="ceo-gmbh-packages-area mt-100">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4">
            <div class="section-heading dark text-center my-auto">
              <span></span>
              <h4 class="text-dark wow fadeInUp" data-wow-delay="0.5s">
                {{ $t('home.our_services') }}
              </h4>
              <p class="text-dark wow fadeInUp" data-wow-delay="0.6s">
                {{ $t('home.tagline') }}
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-100">
          <client-only>
            <div class="col-12  mt-4">
              <div class="all-catagories">
                <div class="row">
                  <!-- Single Catagory Area Brava -->
                  <div class="col-12 col-sm-12 col-md-4 my-md-3">
                    <div
                      class="single-catagory-area my-50 p-0"
                      style="border-radius: 15px"
                      data-wow-delay="0.4s"
                    >
                      <nuxt-link tag="a" :to="localePath('/custom-tour')">
                        <div class="catagory-content">
                          <h5 class="text-dark py-2 p-md-2">
                            {{ $t('nav.custom_tour') }}
                          </h5>

                          <div class="img-hover-zoom parent">
                            <content-placeholders
                              :rounded="true"
                              class="image1"
                            >
                              <content-placeholders-img />
                            </content-placeholders>
                            <img
                              v-if="show"
                              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                              alt="custom-tour-package"
                              crossorigin="anonymous"
                              class="m-0 package-image image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-4 my-md-3">
                    <div
                      class="single-catagory-area my-50 p-0"
                      style="border-radius: 15px"
                      data-wow-delay="0.4s"
                    >
                      <nuxt-link tag="a" :to="localePath('/packages')">
                        <div class="catagory-content">
                          <h5 class="text-dark py-2 p-md-2">
                            {{ $t('nav.tour_packages') }}
                          </h5>

                          <div class="img-hover-zoom parent">
                            <content-placeholders
                              :rounded="true"
                              class="image1"
                            >
                              <content-placeholders-img />
                            </content-placeholders>
                            <img
                              v-if="show"
                              src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                              alt="custom-tour-package"
                              crossorigin="anonymous"
                              class="m-0 package-image image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-4 my-md-3">
                    <div
                      class="single-catagory-area my-50 p-0"
                      style="border-radius: 15px"
                      data-wow-delay="0.4s"
                    >
                      <nuxt-link
                        tag="a"
                        :to="localePath('/photography-exploration')"
                      >
                        <div class="catagory-content">
                          <h5 class="text-dark py-2 p-md-2">
                            {{ $t('nav.photography_exploration') }}
                          </h5>

                          <div class="img-hover-zoom parent">
                            <content-placeholders
                              :rounded="true"
                              class="image1"
                            >
                              <content-placeholders-img />
                            </content-placeholders>
                            <img
                              v-if="show"
                              src="https://images.unsplash.com/photo-1541163941099-f6faf8c3bc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                              alt="custom-tour-package"
                              crossorigin="anonymous"
                              class="m-0 package-image image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </section>
    <!-- ***** Catagory Area End ***** -->

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
            v-for="item in testimonialPosts"
            :key="item.id"
            class="col-12 col-lg-12"
          >
            <div
              class="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig"
              data-wow-delay="0.2s"
            >
              <div class="feature-events-thumb">
                <img :src="item.image" style="border-radius: 15px" alt="" />
              </div>
              <div class="feature-events-content">
                <h5>{{ item.name }}</h5>
                <h6 class="font-weight-bold">{{ item.location }}</h6>
                <p>
                  {{ item.post }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 mt-50 text-center ">
            <nuxt-link :to="localePath('/about-us/testimony')"
              ><button class="ceo-gmbh-btn wow fadeIn" data-wow-delay="0.3s">
                SEE MORE TESTIMONIALS
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="ceo-gmbh-about-area section-padding-0-100 pb-100 mt-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-content text-center">
              <h3 class="font-weight-bold wow fadeInUpBig">
                {{ $t('nav.contact_us') }}
                <br />
                <span>CEO Travel GmbH </span>
              </h3>
              <div class="mt-50">
                <div class="row">
                  <div class="col-12 col-lg-6 ">
                    <a href="https://wa.me/6281389158787" target="_blank">
                      <img
                        class="wow fadeIn img-fluid w-25"
                        src="/icons/whatsapp.png"
                        alt="whatsapp message"
                      />
                    </a>
                    <p class="text-muted">+62-813-8915-8787</p>
                  </div>
                  <div class="col-12 col-lg-6 mt-4 mt-lg-0">
                    <a href="mailto:ceotravelweb@gmail.com" target="_blank">
                      <img
                        class="wow fadeIn img-fluid w-25"
                        src="/icons/gmail.png"
                        alt="whatsapp message"
                      />
                    </a>
                    <p class="text-muted">ceotravelweb@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  components: {},
  async fetch() {
    await this.GET_PACKAGES()
  },
  data() {
    return {
      show: true
    }
  },

  computed: {
    ...mapGetters({
      PACKAGES: 'packages/PACKAGES'
    }),
    packageSlug(name) {
      return name.replace(/\s/g, '-')
    },
    testimonialPosts() {
      return this.$t('testimonial.posts').slice(0, 3)
    }
  },

  mounted() {},
  methods: {
    ...mapActions({
      GET_PACKAGES: 'packages/GET_PACKAGES'
    })
  },
  head() {
    return {
      title: 'Welcome | CEO Travel GmbH'
    }
  }
}
</script>

<style scoped>
.carousel-item {
  height: 60vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
a:hover {
  text-decoration: none;
}

.package-image {
  height: 338px;
  width: 600px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 0px 0px 15px 15px;
}

.img-hover-zoom {
  overflow: hidden;
  border-radius: 0px 0px 15px 15px;
}

.img-hover-zoom img {
  transition: transform 0.9s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.2);
}

.parent {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.image1 {
  position: relative;
  height: 225px;
  width: 400px;
  border-radius: 0px 0px 15px 15px;

  top: 0;
  left: 0;
}
.image2 {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
