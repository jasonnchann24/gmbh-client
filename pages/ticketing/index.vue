<template>
  <div>
    <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
      <div class="hero-container">
        <img
          src="/images/ticketing/hero-ticketing.jpg"
          class="img-fluid"
          width="100%"
          style="max-height: 400px; object-fit: cover; filter: brightness(0.8);"
          alt="customize-tour-hero-image"
          loading="lazy"
        />
        <h1
          class="hero-text text-uppercase display-1 font-weight-bold text-white"
        >
          TICKETING
        </h1>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>TICKETING FORM</h4>
            <p v-show="isAuthenticated">Fill all fields provided</p>
          </div>
        </div>
      </div>
      <div v-if="isAuthenticated" class="row my-5">
        <div class="col-12">
          <form
            class="bg-light p-md-5 p-4 shadow-form"
            style="border-radius: 25px"
            @submit.prevent="createTicket"
          >
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="ticketing-name">Full Name</label>
                <input
                  id="ticketing-name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="ticketing-email">Email</label>
                <input
                  id="ticketing-email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  required
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="ticketing-phone">Phone</label>
              <input
                id="ticketing-phone"
                v-model="form.phone"
                type="tel"
                class="form-control"
                required
                placeholder="62812170845"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="ticketing-origin">Origin</label>
                <select
                  id="ticketing-origin"
                  v-model="form.origin"
                  class="form-control"
                  required
                >
                  <option disabled selected>Choose...</option>
                  <option
                    v-for="(item, index) in countries"
                    :key="index"
                    :value="item.name"
                    >{{ item.name }}</option
                  >
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="ticketing-destination">Destination</label>
                <select
                  id="ticketing-destination"
                  v-model="form.destination"
                  class="form-control"
                  required
                >
                  <option disabled selected>Choose...</option>
                  <option
                    v-for="(item, index) in countries"
                    :key="index"
                    :value="item.name"
                    >{{ item.name }}</option
                  >
                </select>
              </div>
              <div class="form-group col-12 col-md-4">
                <label for="ticketing-purpose">Trip Type</label>
                <select
                  id="ticketing-purpose"
                  v-model="form.trip_type"
                  class="form-control"
                  required
                >
                  <option disabled selected>Choose ...</option>
                  <option value="1">One-way</option>
                  <option value="2">Round-trip</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12 col-md-6">
                <label for="ticketing-date_from">Departure Date</label>
                <input
                  id="ticketing-date_from"
                  v-model="form.departure"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="ticketing-date_return"
                  ><span v-if="disabled" class="text-secondary"
                    >Return Date (Round Trip Only)</span
                  ><span v-else>Return Date</span></label
                >
                <input
                  id="ticketing-date_return"
                  v-model="form.return"
                  type="date"
                  class="form-control"
                  :disabled="disabled"
                  :required="!disabled"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-12 col-md-4">
                <label for="ticketing-adult">Adult</label>
                <input
                  id="ticketing-adult"
                  v-model="adult"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="0"
                  required
                />
              </div>
              <div class="form-group col-12 col-md-4">
                <label for="ticketing-child">Child</label>
                <input
                  id="ticketing-child"
                  v-model="child"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="0"
                  required
                />
              </div>
              <div class="form-group col-12 col-md-4">
                <label for="ticketing-infant">Infant</label>
                <input
                  id="ticketing-infant"
                  v-model="infant"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="0"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="ticketing-seat_class">Seat Class</label>
                <select
                  id="ticketing-seat_class"
                  v-model="form.seat_class"
                  class="form-control"
                  required
                >
                  <option disabled selected>Choose...</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
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
            Please login to request your ticket!
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
      adult: 0,
      infant: 0,
      child: 0,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    disabled() {
      return this.form.trip_type !== '2'
    }
  },
  async created() {
    const data = await this.$axios.$get(
      'https://restcountries.eu/rest/v2/all?fields=name'
    )
    this.countries = data
  },

  methods: {
    ...mapActions({
      CREATE_TICKET: 'tickets/CREATE_TICKET'
    }),
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    async createTicket() {
      this.loading = true
      this.form.adult = parseInt(this.adult)
      this.form.infant = parseInt(this.infant)
      this.form.child = parseInt(this.child)
      try {
        await this.CREATE_TICKET(this.form)
        await this.$swal({
          icon: 'success',
          title: 'Created! ',
          text: `Your tickets request has been created! Kindly wait for our email.`,
          showConfirmButton: true
        })
        this.clearForm()
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: 'Oops! Something wrong.',
          text: 'Double check your inputs! or Please try again later.',
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
      title: `Ticketing | CEO Trade & Travel GmbH`
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
