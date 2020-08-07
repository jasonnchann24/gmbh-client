<template>
  <div>
    <!-- ***** Welcome Area Start ***** -->
    <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
      <div
        id="carousel-toggler"
        class="carousel slide carousel-fade"
        data-ride="carousel"
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
                Discover the Beautiful World
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
                Discover the Beautiful World
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
                Discover the Beautiful World
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
                Discover the beautiful world with
                <br />
                <span>CEO Travel GmbH</span>
              </h3>
              <p class="wow fadeIn" data-wow-delay="2s" data-wow-duration="1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                odit dolorum quasi voluptatum. Blanditiis delectus velit dolorem
                reprehenderit, at sint dolor natus fugit minima facere vel
                adipisci officiis nostrum minus tenetur nesciunt debitis rerum
                eveniet fuga. Officiis, fugiat! Tempore amet eligendi inventore.
                Est ea ut iure, possimus deleniti necessitatibus similique.
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
              <h4 class="text-dark">Our Packages</h4>
              <p class="text-dark">Discover the Beautiful World with Us</p>
            </div>
          </div>
        </div>
        <div v-if="!$fetchState.pending" class="row">
          <client-only>
            <div v-if="PACKAGES" class="col-12  mt-4">
              <div v-if="PACKAGES && show" class="all-catagories">
                <div class="row">
                  <!-- Single Catagory Area Brava -->
                  <div class="col-12 col-sm-12 col-md-4 my-md-3">
                    <div
                      class="single-catagory-area my-50 p-0"
                      style="border-radius: 15px"
                      data-wow-delay="0.4s"
                    >
                      <nuxt-link tag="a" to="/custom-tour">
                        <div class="catagory-content">
                          <h5 class="text-dark py-2 p-md-2">
                            Custom Tour
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
                              src="/images/custom-tour.jpg"
                              alt="custom-tour-package"
                              class="m-0 package-image image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div
                    v-for="(item, index) in PACKAGES.data"
                    :key="item.id"
                    class="col-12 col-sm-12 col-md-4 my-md-3"
                  >
                    <div
                      class="single-catagory-area my-50 p-0"
                      style="border-radius: 15px"
                      :data-wow-delay="`${(index + 1) * 0.6}s`"
                    >
                      <nuxt-link
                        tag="a"
                        :to="
                          `/packages/${item.id}/${item.name
                            .replace(/\s/g, '-')
                            .toLowerCase()}`
                        "
                      >
                        <div class="catagory-content">
                          <h5 class="text-dark py-2 p-md-2">
                            {{ item.name }}
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
                              :src="item.image_url"
                              :alt="`packages-${item.name}`"
                              class="m-0 package-image image2"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div v-if="PACKAGES.meta" class="row mt-100 mb-100">
                  <div v-if="PACKAGES.meta.last_page > 1" class="col-12">
                    <pagination
                      :object-to-paginate="PACKAGES"
                      :store-action="'packages/GET_PACKAGES'"
                    />
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="all-categories">
                  <div class="row">
                    <div
                      v-for="index in 3"
                      :key="index"
                      class="col-12 col-sm-12 col-md-4 my-md-3"
                    >
                      <div class="single-catagory-area m-1 p-0">
                        <content-placeholders :rounded="true">
                          <content-placeholders-heading />
                          <content-placeholders-img />
                        </content-placeholders>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </client-only>
        </div>
        <div v-else class="row">
          <div v-for="index in 3" :key="index" class="col-4 my-5">
            <content-placeholders :rounded="true">
              <content-placeholders-heading />
              <content-placeholders-img />
            </content-placeholders>
          </div>
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
              <h4>Testimonials</h4>
              <p>Our happy customers</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div v-for="index in 3" :key="index" class="col-12 col-lg-12">
            <div
              class="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig"
              data-wow-delay="0.2s"
            >
              <div class="feature-events-thumb">
                <img
                  src="img/bg-img/event-1.jpg"
                  style="border-radius: 15px"
                  alt=""
                />
              </div>
              <div class="feature-events-content">
                <h5>Tom Hanks</h5>
                <h6>Jakarta</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae iste at vitae, totam odio provident?
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
import { mapGetters, mapActions } from 'vuex'
import Pagination from '@/components/Core/Pagination'
export default {
  name: 'IndexPage',
  components: {
    Pagination
  },
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
    }
  },

  mounted() {},
  methods: {
    ...mapActions({
      GET_PACKAGES: 'packages/GET_PACKAGES'
    })
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
