<template>
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="text-uppercase">
            3. {{ $t('emergency_contact_comp.title') }}
          </h5>
        </div>
        <div v-if="!item.forms.emergency_contact" class="col-12 col-md-6">
          <button
            v-if="item.forms.master_passenger"
            class="btn btn-block btn-primary"
            @click="eContactShow = !eContactShow"
          >
            {{ $t('emergency_contact_comp.create_emergency') }}
          </button>
          <button v-else class="btn btn-block btn-secondary" disabled>
            {{ $t('emergency_contact_comp.please_choose') }}
          </button>
        </div>
        <div v-else class="col-12 col-md-6">
          <button
            class="btn btn-block btn-success"
            @click="showEmergencyContactDetail = !showEmergencyContactDetail"
          >
            {{ $t('emergency_contact_comp.emergency_contact_detail') }}
          </button>
        </div>
      </div>
      <div
        v-if="eContactShow && !item.forms.emergency_contact"
        class="row mt-4"
      >
        <div class="col-12">
          <h6 class="text-uppercase">
            {{ $t('emergency_contact_comp.create_contact') }}
          </h6>
        </div>
        <div class="col-12 mt-4">
          <form @submit.prevent="createEmergencyContact">
            <div class="form-group row">
              <label for="e-name" class="col-sm-2 col-form-label">{{
                $t('emergency_contact_comp.name')
              }}</label>
              <div class="col-sm-6">
                <input
                  id="e-name"
                  v-model="e_contact.name"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="e-phone_number" class="col-sm-2 col-form-label">{{
                $t('emergency_contact_comp.phone')
              }}</label>
              <div class="col-sm-6">
                <input
                  id="e-phone_number"
                  v-model="e_contact.telephone"
                  type="tel"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="e-relatives" class="col-sm-2 col-form-label">{{
                $t('emergency_contact_comp.relative')
              }}</label>
              <div class="col-sm-6">
                <input
                  id="e-relatives"
                  v-model="e_contact.relatives"
                  type="text"
                  class="form-control"
                  placeholder="Father"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <button
                  v-if="!loading"
                  type="submit"
                  class="btn btn-block btn-success"
                >
                  {{ $t('emergency_contact_comp.submit_btn') }}
                </button>
                <button v-else class="btn btn-block btn-success" disabled>
                  {{ $t('emergency_contact_comp.submitting') }} ...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        v-else-if="showEmergencyContactDetail && item.forms.emergency_contact"
      >
        <div class="row mt-4">
          <div class="col-12">
            <p>
              {{ $t('emergency_contact_comp.name') }} :
              {{ item.forms.emergency_contact.name }}
            </p>
            <p>
              {{ $t('emergency_contact_comp.telephone') }} :
              {{ item.forms.emergency_contact.telephone }}
            </p>
            <p>
              {{ $t('emergency_contact_comp.relative') }} :
              {{ item.forms.emergency_contact.relatives }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EmergencyContactComponent',
  data() {
    return {
      eContactShow: false,
      showEmergencyContactDetail: false,
      e_contact: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    item() {
      return this.TRANSACTION.data
    }
  },
  methods: {
    ...mapActions({
      GET_TRANSACTION: 'transactions/GET_TRANSACTION',
      CREATE_EMERGENCY_CONTACT: 'passengers/CREATE_EMERGENCY_CONTACT'
    }),
    async createEmergencyContact() {
      this.loading = true
      this.e_contact.transaction_id = this.$route.params.id
      try {
        await this.CREATE_EMERGENCY_CONTACT(this.e_contact)
        await this.GET_TRANSACTION(this.$route.params.id)
        this.$swal({
          background: '#f5f5f5',
          icon: 'success',
          title: `${this.$t('emergency_contact_comp.swal.success_title')}`,
          text: `${this.$t('emergency_contact_comp.swal.success_text')} ${
            this.e_contact.name
          }`,
          showConfirmButton: true
        })
      } catch (e) {
        this.$swal({
          background: '#f5f5f5',
          icon: 'error',
          title: `${this.$t('emergency_contact_comp.swal.error_title')}`,
          text: `${this.$t('emergency_contact_comp.swal.error_text')}`,
          showConfirmButton: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
