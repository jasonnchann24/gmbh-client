<template>
  <div>
    <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
      <div class="hero-container">
        <img
          src="/images/custom-tour/custom-tour-hero.jpg"
          class="img-fluid"
          width="100%"
          style="max-height: 400px; object-fit: cover; filter: brightness(0.8);"
          alt="customize-tour-hero-image"
          loading="lazy"
        />
        <h1
          class="hero-text text-uppercase display-1 font-weight-bold text-white"
        >
          CUSTOM TOUR
        </h1>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>CUSTOM TOUR FORM</h4>
            <p v-show="isAuthenticated">Fill all fields provided</p>
          </div>
        </div>
      </div>
      <div v-if="isAuthenticated" class="row my-5">
        <div class="col-12">
          <form
            class="bg-light p-md-5 p-4 shadow-form"
            style="border-radius: 25px"
            @submit.prevent="createCustomTour"
          >
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="custom-name">Full Name</label>
                <input
                  id="custom-name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="custom-email">Email</label>
                <input
                  id="custom-email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  required
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="custom-phone">Phone</label>
              <input
                id="custom-phone"
                v-model="form.phone"
                type="tel"
                class="form-control"
                required
                placeholder="62812170845"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="custom-origin">Origin</label>
                <select
                  id="custom-origin"
                  v-model="form.origin"
                  class="form-control"
                  required
                >
                  <option selected>Choose...</option>
                  <option
                    v-for="(item, index) in countries"
                    :key="index"
                    :value="item.name"
                    >{{ item.name }}</option
                  >
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="custom-destination">Destination</label>
                <select
                  id="custom-destination"
                  v-model="form.destination"
                  class="form-control"
                  required
                >
                  <option selected>Choose...</option>
                  <option
                    v-for="(item, index) in countries"
                    :key="index"
                    :value="item.name"
                    >{{ item.name }}</option
                  >
                </select>
              </div>
              <div class="form-group col-12 col-md-4">
                <label for="custom-purpose">Trip Purpose</label>
                <input
                  id="custom-purpose"
                  v-model="form.trip_purpose"
                  type="text"
                  class="form-control"
                  placeholder="Family Vacation"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12 col-md-6">
                <label for="custom-date_from">Date From</label>
                <input
                  id="custom-date_from"
                  v-model="form.date_from"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="custom-date_to">Date To</label>
                <input
                  id="custom-date_to"
                  v-model="form.date_to"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center mt-4">
                <button
                  v-if="!loading"
                  type="submit"
                  class="btn btn-primary w-25 "
                  style="background-color: #4576a2"
                >
                  Submit
                </button>
                <button
                  v-else
                  class="btn btn-primary"
                  style="background-color:#4576a2"
                  disabled
                >
                  Submitting your request ...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-else class="row my-5" style="height: 250px">
        <div class="col-12 text-center mt-50">
          <h4 class="text-danger font-weight-bold">
            Please login to request your custom tour!
          </h4>
          <button
            type="button"
            class="ceo-gmbh-btn text-white mt-4"
            data-toggle="modal"
            data-target="#modal-login"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CustomTourPage',
  data() {
    return {
      countries: {},
      form: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    })
  },
  async created() {
    const data = await this.$axios.$get(
      'https://restcountries.eu/rest/v2/all?fields=name'
    )
    this.countries = data
  },

  methods: {
    ...mapActions({
      CREATE_CUSTOM_TOUR: 'custom-tours/CREATE_CUSTOM_TOUR'
    }),
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    async createCustomTour() {
      this.loading = true
      try {
        await this.CREATE_CUSTOM_TOUR(this.form)
        await this.$swal({
          icon: 'success',
          title: 'Created! ',
          text: `Your custom tour has been created! Kindly wait for our email.`,
          showConfirmButton: true
        })
        this.clearForm()
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: 'Oops! Something wrong.',
          text: 'Please try again later.',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 5000
        })
      } finally {
        this.loading = false
      }
    }
  },
  head() {
    return {
      title: 'Custom Tour | CEO Trade & Travel GmbH'
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

.shadow-form {
  -webkit-box-shadow: 4px 4px 15px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 4px 4px 15px 0px rgba(128, 128, 128, 1);
  box-shadow: 4px 4px 15px 0px rgba(128, 128, 128, 1);
}
</style>
