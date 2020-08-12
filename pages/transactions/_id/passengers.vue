<template>
  <div style="background-color: #f4f4f4;">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-100">
          <div class="section-heading dark text-center">
            <span></span>
            <h4>Add Passengers</h4>
            <p>Fill all passengers detail</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="TRANSACTION.data">
      <client-only>
        <div class="container pb-4">
          <div v-for="(passenger, index) in passengers" :key="index">
            <stepper :id-number="`${parseInt(index)}`" />
          </div>
        </div>
      </client-only>
    </div>
    <div v-else>
      <client-only>
        <div class="container">
          <div class="row">
            <content-placeholders :rounded="true">
              <content-placeholders-heading />
              <content-placeholders-img />
            </content-placeholders>

            <content-placeholders :rounded="true">
              <content-placeholders-heading />
              <content-placeholders-img />
            </content-placeholders>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Stepper from '@/components/Form/Stepper'
export default {
  name: 'AddPassengersPage',
  middleware: ['auth'],
  components: {
    Stepper
  },
  data() {
    return {
      formLoading: false,
      passengers: null
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    disabled() {
      return this.passengers > 0
    },
    item() {
      return this.TRANSACTION.data ? this.TRANSACTION.data : {}
    }
  },
  async mounted() {
    await this.GET_TRANSACTION(this.$route.params.id)
    this.addPassengers()
  },

  methods: {
    ...mapActions({
      CREATE_PASSENGERS: 'passengers/CREATE_PASSENGERS',
      GET_TRANSACTION: 'transactions/GET_TRANSACTION'
    }),
    async createPassengers() {
      this.formLoading = true
      const form = {
        transaction_id: this.$route.params.id,
        passengers: this.passengers
      }
      try {
        await this.CREATE_PASSENGERS(form)
        await this.GET_TRANSACTION(this.$route.params.id)
        this.$swal({
          background: '#f5f5f5',
          icon: 'success',
          title: 'Created!',
          text: `Passengers Created!`,
          showConfirmButton: true
        })
      } catch (e) {
        this.$swal({
          background: '#f5f5f5',
          icon: 'error',
          title: 'Error!',
          text: `Please double check your inputs before submitting!`,
          showConfirmButton: true
        })
      } finally {
        this.formLoading = false
      }
    },
    addPassengers() {
      const passengersCount =
        this.item.adults + this.item.children + this.item.infants
      this.passengers = passengersCount
      this.$swal({
        position: 'top',
        background: '#f5f5f5',
        icon: 'success',
        title: 'Created!',
        text: `${passengersCount} Passengers form created! Please double check your inputs before submitting!`,
        showConfirmButton: true
      })
    }
  }
}
</script>
