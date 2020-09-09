<template>
  <div class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-100">
          <div class="section-heading dark text-center">
            <span></span>
            <h4>{{ $t('settings.title') }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 mx-auto">
          <h4 class="text-uppercase font-weight-bolder">
            {{ $t('settings.change_pass') }}
          </h4>
          <div v-if="error" class="alert alert-danger" role="alert">
            <span v-if="error.status === 403">
              {{ error.data.message }}
            </span>
            <span v-else>
              {{ $t('settings.error.not_match') }}
            </span>
          </div>
          <form class="mt-4 mb-100" @submit.prevent="resetPassword">
            <div class="form-group">
              <label for="old-password">{{
                $t('settings.old_password')
              }}</label>
              <input
                id="old-password"
                v-model="form.old_password"
                type="password"
                class="form-control"
                aria-describedby="oldPasswordHelp"
                :style="errorBorder403"
                required
              />
              <small id="oldPasswordHelp" class="form-text text-muted">{{
                $t('settings.curr_password')
              }}</small>
            </div>
            <div class="form-group">
              <label for="new-password">{{
                $t('settings.new_password')
              }}</label>
              <input
                id="new-password"
                v-model="form.new_password"
                type="password"
                class="form-control"
                :style="errorBorder422"
                required
              />
            </div>
            <div class="form-group">
              <label for="new-password-confirmation">{{
                $t('settings.new_password_confirm')
              }}</label>
              <input
                id="new-password-confirmation"
                v-model="form.new_password_confirmation"
                type="password"
                class="form-control"
                :style="errorBorder422"
                required
              />
            </div>
            <div class="text-right">
              <button v-if="!loading" type="submit" class="ceo-gmbh-btn">
                {{ $t('settings.submit') }}
              </button>
              <button
                v-else
                class="ceo-gmbh-btn"
                disabled
                style="pointer-events: none;"
              >
                {{ $t('settings.loading') }} ...
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetinggsPage',
  middleware: 'auth',
  data() {
    return {
      form: {},
      loading: false,
      error: null
    }
  },
  computed: {
    errorBorder403() {
      if (this.error) {
        if (this.error.status === 403) {
          return 'border-color: red'
        }
        return ''
      }
      return ''
    },
    errorBorder422() {
      if (this.error) {
        if (this.error.status === 422) {
          return 'border-color: red'
        }
        return ''
      }
      return ''
    }
  },
  methods: {
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    async resetPassword() {
      this.loading = true
      try {
        await this.$axios.$patch('/reset-password-user', this.form)
        this.clearForm()
        this.$swal({
          icon: 'success',
          title: `${this.$t('settings.swal.success_title')}`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 5000
        })
      } catch (e) {
        this.error = e.response
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
