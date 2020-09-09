<template>
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="text-uppercase">
            2. {{ $t('master_passenger_comp.title') }}
          </h5>
        </div>
        <div v-if="!item.forms.master_passenger" class="col-12 col-md-6">
          <button
            v-if="item.forms.passengers.length > 0"
            class="btn btn-block btn-primary"
            @click="masterForm = !masterForm"
          >
            {{ $t('master_passenger_comp.choose') }}
          </button>
          <button v-else class="btn btn-block btn-secondary" disabled>
            {{ $t('master_passenger_comp.please_submit_passenger') }}
          </button>
        </div>
        <div v-else class="col-12 col-md-6">
          <button
            class="btn btn-block btn-success"
            @click="showMasterDetail = !showMasterDetail"
          >
            {{ $t('master_passenger_comp.master_detail') }}
          </button>
        </div>
      </div>
      <div v-if="masterForm && !item.forms.master_passenger" class="row mt-4">
        <div class="col-12">
          <h6 class="text-uppercase">
            {{ $t('master_passenger_comp.please_choose') }}
          </h6>
        </div>
        <div class="col-8 mt-4">
          <form @submit.prevent="createMasterPassenger">
            <div class="form-group row">
              <label for="master-passenger" class="col-sm-2 col-form-label">{{
                $t('master_passenger_comp.passenger')
              }}</label>
              <div class="col-sm-6 ">
                <select
                  id="master-passenger"
                  v-model="masterDetail.passenger_id"
                  class="form-control"
                >
                  <option value="" disabled selected>Choose...</option>
                  <option
                    v-for="master in item.forms.passengers"
                    :key="master.id"
                    :value="master.id"
                    >{{ master.person_name }}</option
                  >
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="master-email" class="col-sm-2 col-form-label">{{
                $t('master_passenger_comp.email')
              }}</label>
              <div class="col-sm-6">
                <input
                  id="master-email"
                  v-model="masterDetail.email"
                  type="email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button
                  v-if="!formLoading"
                  type="submit"
                  class="btn btn-block btn-success"
                >
                  {{ $t('master_passenger_comp.add_master_btn') }}
                </button>
                <button v-else class="btn btn-block btn-success" disabled>
                  {{ $t('master_passenger_comp.saving_btn') }} ...
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-else-if="item.forms.master_passenger && showMasterDetail">
        <div class="row mt-4">
          <div class="col-12">
            <p>
              {{ $t('master_passenger_comp.email') }} :
              {{ item.forms.master_passenger.email }}
            </p>
            <p>
              {{ $t('master_passenger_comp.name') }} :
              {{ item.forms.master_passenger.passenger_name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MasterPassengerComponent',
  data() {
    return {
      formLoading: false,
      masterForm: false,
      masterDetail: {},
      showMasterDetail: false
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
      CREATE_MASTER_PASSENGER: 'passengers/CREATE_MASTER_PASSENGER'
    }),
    async createMasterPassenger() {
      this.formLoading = true
      this.masterDetail.transaction_id = this.$route.params.id
      try {
        await this.CREATE_MASTER_PASSENGER(this.masterDetail)
        await this.GET_TRANSACTION(this.$route.params.id)

        this.$swal({
          background: '#f5f5f5',
          icon: 'success',
          title: `${this.$t('master_passenger_comp.swal.success_title')}`,
          text: `${this.$t('master_passenger_comp.swal.success_text')} ${
            this.masterDetail.email
          }`,
          showConfirmButton: true
        })
      } catch (e) {
        this.$swal({
          background: '#f5f5f5',
          icon: 'error',
          title: `${this.$t('master_passenger_comp.swal.error_title')}`,
          text: `${this.$t('master_passenger_comp.swal.error_text')}`,
          showConfirmButton: true
        })
      } finally {
        this.formLoading = false
      }
    }
  }
}
</script>

<style></style>
