<template>
  <div
    id="modal-login"
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    data-backdrop="static"
    data-keyboard="false"
    aria-labelledby="modal-loginLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-3" style="border-radius: 25px">
        <div class="modal-header border-0">
          <h5 id="modal-loginLabel" class="modal-title">
            Welcome to CEO GmbH
          </h5>
          <button
            id="closeModalBtn"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="clearForm"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="!register" class="container">
            <div class="row">
              <div class="col-12">
                <h3>Sign In</h3>
              </div>
              <div class="col-12 mt-4">
                <div class="form-group">
                  <label for="login-email">Email address</label>
                  <input
                    id="login-email"
                    v-model="loginForm.email"
                    placeholder="Email"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    required
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <label for="login-password">Password</label>
                  <input
                    id="login-password"
                    v-model="loginForm.password"
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    required
                  />
                </div>
                <div class="row">
                  <div class="col-12">
                    <a :href="`${sanctum_url}/password/reset`" target="_blank">
                      Forget your password?
                    </a>
                  </div>
                  <div class="col-12">
                    <a href="javascript:void(0);" @click="changeModal">
                      Need a new account? Register here.
                    </a>
                  </div>
                  <div class="col-12 my-4 ">
                    <button
                      v-if="!loading"
                      type="button"
                      class="btn btn-block ceo-gmbh-btn mt-4 text-white"
                      style="background-color: #4d89b9"
                      @click="login"
                    >
                      Sign In
                    </button>

                    <button
                      v-else
                      class="btn btn-block ceo-gmbh-btn mt-4 text-white"
                      style="background-color: #4d89b9"
                      disabled
                    >
                      Logging in...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="register" class="container">
            <div class="row">
              <div class="col-12">
                <h3 class="pt-2 pb-2 pr-2">Register</h3>
              </div>
              <div class="col-12 mt-4">
                <div class="form-group">
                  <label for="name-register">Full Name</label>
                  <input
                    id="name-register"
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="form-group">
                  <label for="email-register">Email address</label>
                  <input
                    id="email-register"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    required
                    placeholder="email@email.com"
                  />
                </div>
                <div class="form-group">
                  <label for="password-register">Password</label>
                  <input
                    id="password-register"
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password-confirm-register"
                    >Confirm Password</label
                  >
                  <input
                    id="password-confirm-register"
                    v-model="form.c_password"
                    type="password"
                    class="form-control"
                    required
                  />
                </div>
                <div class="row">
                  <div class="col-12">
                    <a
                      href="javascript:void(0);"
                      @click="
                        changeModal()
                        clearForm()
                      "
                    >
                      Have an account? Login here.
                    </a>
                  </div>
                  <div class="col-12">
                    <a href="javascript:void(0);" @click="showResend">
                      Not Receiving Verification Email?
                    </a>
                  </div>
                  <div v-if="error" class="col-12 mt-4">
                    <div class="alert alert-danger" role="alert">
                      Error! Duplicate Email or wrong password confirmation!
                    </div>
                  </div>
                  <div class="col-12 my-4">
                    <button
                      v-if="!loading"
                      type="submit"
                      class="btn btn-block ceo-gmbh-btn text-white"
                      style="background-color: #4d89b9"
                      @click="registerUser"
                    >
                      Register
                    </button>
                    <button
                      v-else
                      class="btn btn-block ceo-gmbh-btn text-white"
                      style="background-color: #4d89b9"
                      disabled
                    >
                      Loading ...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="resend" class="container">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="email-resend">Resend Verification Email</label>
                  <input
                    id="email-resend"
                    v-model="email"
                    type="email"
                    class="form-control"
                    required
                    placeholder="email@email.com"
                  />
                </div>
                <div v-if="errorResend" class="col-12 mt-4">
                  <div class="alert alert-danger" role="alert">
                    <span v-for="(item, index) in errorResend" :key="index">
                      {{ item }}
                    </span>
                  </div>
                </div>
                <div class="col-12 my-4 mx-0 px-0">
                  <button
                    v-if="!resendLoading"
                    type="submit"
                    class="btn btn-block ceo-gmbh-btn text-white"
                    style="background-color: #4d89b9"
                    @click="resendEmail"
                  >
                    Resend Email
                  </button>
                  <button
                    v-else
                    class="btn btn-block ceo-gmbh-btn text-white"
                    style="background-color: #4d89b9"
                    disabled
                  >
                    Loading ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalLogin',
  data() {
    return {
      register: false,
      form: {},
      loginForm: {
        email: '',
        password: ''
      },
      loading: false,
      error: false,
      resend: false,
      email: '',
      errorResend: null,
      resendLoading: false,
      sanctum_url: process.env.SANCTUM_URL
    }
  },
  computed: {},
  methods: {
    changeModal() {
      this.register = !this.register
    },

    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    showResend() {
      this.resend = !this.resend
    },
    async registerUser() {
      this.loading = true
      try {
        await this.$axios.$get(`${this.sanctum_url}/sanctum/csrf-cookie`)
        await this.$axios.$post('register', this.form)
        await document.getElementById('closeModalBtn').click()
        this.$swal({
          icon: 'success',
          title: 'Please check your email to verify your account!',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 10000
        })
      } catch (e) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
    async resendEmail() {
      this.resendLoading = true
      try {
        await this.$axios.$get(`${this.sanctum_url}/sanctum/csrf-cookie`)
        await this.$axios.$post('email/resend', { email: this.email })
        this.$swal({
          icon: 'success',
          title: 'Verification Email Resent!',
          showConfirmButton: false,
          timer: 10000
        })
      } catch (e) {
        this.errorResend = e.response.data.errors
      } finally {
        this.resendLoading = false
      }
    },
    async login() {
      this.loading = true
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.loginForm.email,
            password: this.loginForm.password
          }
        })
        await document.getElementById('closeModalBtn').click()
        this.$swal({
          icon: 'success',
          title: 'Logged In!',
          text: 'Check navigation bar for Customer Section',
          showConfirmButton: false,
          timer: 7000,
          timerProgressBar: true
        })
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Wrong Credentials / Not Verified Email!',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped></style>
