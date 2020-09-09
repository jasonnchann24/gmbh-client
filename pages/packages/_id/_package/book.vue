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
            <h4>{{ $t('package.book.section') }} {{ item.name }}</h4>
            <p>
              {{ item.description }}
            </p>

            <div class="contact-info d-lg-flex">
              <div class="single-contact-info">
                <h6>
                  <i class="fa fa-map-signs text-dark" aria-hidden="true"></i>
                  Bergstrasse 19
                </h6>
                <h6>
                  <i class="fa fa-map-signs text-dark" aria-hidden="true"></i>
                  21481 Schnakenbek, Germany.
                </h6>
              </div>
              <div class="single-contact-info">
                <h6>
                  <i class="fa fa-envelope-o text-dark" aria-hidden="true"></i>
                  <a href="mailto:ceotravelweb@gmail.com" target="_blank"
                    >ceotravelweb@gmail.com</a
                  >
                </h6>
                <h6>
                  <i class="fa fa-phone text-dark" aria-hidden="true"></i>+62 -
                  813 - 8915 - 8787 /
                  <a href="https://wa.me/6281389158787" target="_blank"
                    >Whatsapp</a
                  >
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
                  {{ $t('package.book.make_booking') }}
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
                    <h5>{{ $t('package.book.package') }} - {{ item.name }}</h5>
                  </div>
                  <div class="form-group row mt-4">
                    <label
                      for="book-adults"
                      class="col-6 text-right col-form-label"
                      >{{ $t('package.book.adults') }}
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
                      >{{ $t('package.book.children') }}
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
                      >{{ $t('package.book.infants') }}
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
                  <div class="form-group form-check">
                    <input
                      id="book-agree"
                      type="checkbox"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="book-agree"
                      ><a
                        :href="tcLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Agree Terms & Conditions</a
                      ></label
                    >
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
                        {{ $t('package.book.make_booking') }}
                      </button>

                      <button v-else disabled class="ceo-gmbh-btn mt-2 mb-5">
                        {{ $t('package.book.loading_make') }} ...
                      </button>
                    </div>
                  </div>
                  <div v-else class="row">
                    <div class="col-12 col-lg-6 mx-auto">
                      <p class="text-danger">
                        {{ $t('package.book.required') }}
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
      loading: false,
      tcLink: 'https://google.com'
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
          title: `${this.$t('package.book.swal.create_accept')}`,
          text: `${this.$t('package.book.swal.create_text')} ${
            this.calculate
          } ${this.$t('package.book.swal.passengers')}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: `${this.$t('package.book.swal.confirmBtn')}`
        }).then(async (result) => {
          if (result.value) {
            await this.CREATE_TRANSACTION(this.form)
            await this.clearForm()
            await this.$swal({
              icon: 'success',
              title: `${this.$t('package.book.swal.success_title')}`,
              text: `${this.$t('package.book.swal.success_text')} ${
                this.TRANSACTION.data.transaction_number
              }`,
              showConfirmButton: true
            })
            this.$router.push(
              this.localeRoute({
                name: 'transactions-id',
                params: { id: `${this.TRANSACTION.data.id}` }
              })
            )
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
