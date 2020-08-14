<template>
  <div>
    <div v-if="PACKAGE.data && !loading">
      <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
        <div class="hero-container">
          <img
            :src="item.image_url"
            class="img-fluid"
            width="100%"
            style="max-height: 400px; object-fit: cover; filter: brightness(0.8);"
            :alt="`${item.name}-package`"
            loading="lazy"
          />
          <h1
            class="hero-text text-uppercase display-1 font-weight-bold text-white"
          >
            {{ item.name }}
          </h1>
        </div>
      </section>

      <section class="ceo-gmbh-single-listing-area section-padding-100">
        <div class="container">
          <div class="row justify-content-center">
            <!-- Single Listing Content -->
            <div class="col-12 col-lg-8">
              <div class="single-listing-content">
                <div class="listing-title">
                  <h4>{{ item.name }}</h4>
                  <h6>
                    PERIOD : {{ item.from_period }} -
                    {{ item.to_period }}
                  </h6>
                </div>

                <div class="single-listing-nav">
                  <nav>
                    <ul id="listingNav">
                      <li class="active">
                        <a href="#overview">Description</a>
                      </li>
                      <li><a href="#menu">Tour Includes & Excludes</a></li>
                    </ul>
                  </nav>
                </div>

                <div id="overview" class="overview-content mt-50">
                  <p>
                    {{ item.description }}
                  </p>
                </div>

                <div id="menu" class="tour-list-info-area mt-100">
                  <h4>Tour Includes & Excludes</h4>
                  <!-- Single Listing Menu -->
                  <div
                    class="single-tour-list-info d-flex justify-content-between"
                  >
                    <!-- Listing Menu Title -->
                    <div class="tour-list-info-title">
                      <h5 class="text-uppercase text-white font-weight-bolder">
                        Tour Includes
                      </h5>
                      <p class="text-white tour-ex-in">
                        {{ item.tour_includes }}
                      </p>
                    </div>
                  </div>
                  <!-- Single Listing Menu -->
                  <div
                    class="single-tour-list-info d-flex justify-content-between"
                  >
                    <!-- Listing Menu Title -->
                    <div class="tour-list-info-title">
                      <h5 class="text-uppercase text-white font-weight-bolder">
                        Tour Excludes
                      </h5>
                      <p class="text-white tour-ex-in">
                        {{ item.tour_excludes }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Listing Sidebar -->
            <div class="col-12 col-md-8 col-lg-4">
              <div class="listing-sidebar mt-5">
                <!-- Listing Verify -->
                <div class="listing-verify">
                  <nuxtLink
                    v-if="authenticated"
                    :to="`${$route.path}/book`"
                    tag="a"
                    class="btn text-white text-uppercase w-100 animate__animated animate__pulse animate__infinite"
                    style="background-color: #4676A3"
                    ><i class="fa fa-check pr-3"></i>Click here to book
                    ticket!</nuxtLink
                  >
                  <a
                    v-else
                    href="javascript:void(0)"
                    class="btn btn-danger text-uppercase w-100 animate__animated animate__pulse animate__infinite"
                    @click="modalLogin"
                    >Please login to book!</a
                  >
                </div>

                <!-- Book A Table Widget -->

                <!-- Opening Hours Widget -->
                <div class="room-price-widget mt-50">
                  <h6 class="text-uppercase text-dark font-weight-bolder">
                    Room Choices
                  </h6>
                  <p class="text-muted">Prices in Thousands</p>
                  <ul class="room-price">
                    <li v-for="room in item.room_choices" :key="room.id">
                      <p>{{ room.room_name }}</p>
                      <p>Rp. {{ room.room_price }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <client-only>
        <div class="container">
          <div class="row p-5 align-items-center mx-auto">
            <div class="col-12 my-4">
              <content-placeholders :rounded="true">
                <content-placeholders-img />
              </content-placeholders>
            </div>
            <div v-for="index in 2" :key="index" class="col-12 my-4">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="2" />
              </content-placeholders>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PackageShow',
  async fetch() {
    this.loading = true
    try {
      await this.GET_PACKAGE(this.$route.params.id)
    } catch (e) {
      alert(e.response.data.message)
    } finally {
      this.loading = false
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      PACKAGE: 'packages/PACKAGE',
      authenticated: 'isAuthenticated'
    }),
    item() {
      return this.PACKAGE.data
    },
    packageName() {
      const name = this.$route.params.package
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  },

  methods: {
    ...mapActions({
      GET_PACKAGE: 'packages/GET_PACKAGE'
    }),
    modalLogin() {
      document.getElementById('sign-in-btn-link').click()
    }
  },
  head() {
    return {
      title: `${this.packageName} | CEO Travel GmbH`
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

.tour-ex-in {
  line-height: 1.7em;
  margin-top: 1.3em;
}
</style>
