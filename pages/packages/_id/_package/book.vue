<template>
  <div>
    <div v-if="PACKAGE.data && !$fetchState.pending">
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
      <div id="contact" class="dorne-contact-area d-md-flex">
        <div class="contact-form-area equal-height mb-0">
          <div class="contact-text">
            <h4>Book section for {{ item.name }}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit
              amet vestibulum. Proin tempus lacus porta lorem blandit aliquam
              eget quis ipsum. Vivamus accumsan consequat ligula non volutpat.
              Sed mollis orci non cursus vestibulum. Pellentesque vitae est a
              augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis
              ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum
              efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor
              sit amet, consectetur.
            </p>

            <div class="contact-info d-lg-flex">
              <div class="single-contact-info">
                <h6>
                  <i class="fa fa-map-signs text-dark" aria-hidden="true"></i>
                  Jakarta
                </h6>
                <h6>
                  <i class="fa fa-map-signs text-dark" aria-hidden="true"></i>
                  No. 25-33
                </h6>
              </div>
              <div class="single-contact-info">
                <h6>
                  <i class="fa fa-envelope-o text-dark" aria-hidden="true"></i>
                  contact@yourbusiness.com
                </h6>
                <h6>
                  <i class="fa fa-phone text-dark" aria-hidden="true"></i> +34
                  567 22478 49567
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="ceo-gmbh-map-area equal-height">
          <div class="container ">
            <div class="row">
              <div class="col-12 text-center">
                <h4
                  class="section-heading dark text-uppercase mb-4"
                  style="font-weight: 800"
                >
                  Make Booking
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <form
                  class="p-2 mx-auto mx-lg-5 bg-light shadow-form"
                  style="border-radius: 15px"
                  @submit.prevent="createTransaction"
                >
                  <div class="col-12 mt-4">
                    <h5>Package {{ item.name }}</h5>
                  </div>
                  <div class="form-group row mt-4">
                    <label
                      for="book-adults"
                      class="col-6 text-right col-form-label"
                      >Adults
                    </label>
                    <div class="col-3 col-lg-2">
                      <input
                        id="book-adults"
                        v-model="form.adults"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="0"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="book-children"
                      class="col-6 text-right col-form-label"
                      >Children
                    </label>
                    <div class="col-3 col-lg-2">
                      <input
                        id="book-children"
                        v-model="form.children"
                        type="number"
                        min="0"
                        placeholder="0"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="book-infants"
                      class="col-6 text-right col-form-label"
                      >Infants
                    </label>
                    <div class="col-3 col-lg-2">
                      <input
                        id="book-infants"
                        v-model="form.infants"
                        type="number"
                        min="0"
                        placeholder="0"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div
                    v-if="!disabled && Number.isInteger(calculate)"
                    class="row"
                  >
                    <div class="col-6 col-lg-4 mx-auto">
                      <button
                        v-if="!loading"
                        type="submit"
                        class="ceo-gmbh-btn btn-block mt-2 mb-5"
                      >
                        Make Booking
                      </button>

                      <button v-else disabled class="ceo-gmbh-btn mt-2 mb-5">
                        Making your booking ...
                      </button>
                    </div>
                  </div>
                  <div v-else class="row">
                    <div class="col-12 col-lg-6 mx-auto">
                      <p class="text-danger">
                        Min. 1 adult needed to make booking
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Contact Area End ***** -->

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
  name: 'BookPackage',
  middleware: ['auth'],
  async fetch() {
    try {
      await this.GET_PACKAGE(this.$route.params.id)
    } catch (e) {
      alert(e.response.data.message)
    }
  },
  data() {
    return {
      form: {
        adults: 0,
        infants: 0,
        children: 0
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      PACKAGE: 'packages/PACKAGE',
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    item() {
      return this.PACKAGE.data
    },
    disabled() {
      const adults = this.form.adults === '' ? 0 : parseInt(this.form.adults)
      return this.calculate < 1 || adults < 1
    },
    calculate() {
      const adults = this.form.adults === '' ? 0 : parseInt(this.form.adults)
      const infants = this.form.infants === '' ? 0 : parseInt(this.form.infants)
      const children =
        this.form.children === '' ? 0 : parseInt(this.form.children)
      return adults + infants + children
    }
  },
  methods: {
    ...mapActions({
      GET_PACKAGE: 'packages/GET_PACKAGE',
      CREATE_TRANSACTION: 'transactions/CREATE_TRANSACTION'
    }),
    checkNan(check) {
      if (this.adults === '') {
        this.adults = 0
      }
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    async createTransaction() {
      this.loading = true
      this.form.package_id = this.$route.params.id
      if (this.form.children === '') {
        this.form.children = 0
      }
      if (this.form.infants === '') {
        this.form.infants = 0
      }

      this.form.adults = parseInt(this.form.adults)
      this.form.children = parseInt(this.form.children)
      this.form.infants = parseInt(this.form.infants)
      try {
        await this.$swal({
          title: 'Are you sure?',
          text: `Create booking for ${this.calculate} Passenger(s)`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, create it!'
        }).then(async (result) => {
          if (result.value) {
            await this.CREATE_TRANSACTION(this.form)
            await this.clearForm()
            await this.$swal({
              icon: 'success',
              title: 'Created! ',
              text: `Please proceed to fill your booking details. Booking number: ${this.TRANSACTION.data.transaction_number}`,
              showConfirmButton: true
            })
            this.$router.push(`/transactions/${this.TRANSACTION.data.id}`)
          }
        })
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
      title: `${this.item.name} Book | CEO Travel GmbH`
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
