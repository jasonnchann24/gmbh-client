<template>
  <!-- PASSENGER INFO -->
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="text-uppercase">1. Passengers Information</h5>
        </div>
        <div v-if="item.forms.passengers.length == 0" class="col-12 col-md-6">
          <nuxt-link
            :to="`/transactions/${$route.params.id}/passengers`"
            class="btn btn-block btn-primary"
            :disabled="disabled"
            tag="button"
          >
            Add Passengers Information
          </nuxt-link>
        </div>
        <div
          v-else-if="item.forms.passengers.length > 0"
          class="col-12 col-md-6"
        >
          <button
            class="btn btn-block btn-success"
            @click="passengersDetail = !passengersDetail"
          >
            All Passengers Detail
          </button>
        </div>
      </div>

      <!-- PASSENGER TABLE DETAIL START -->
      <div v-if="passengersDetail" class="row mt-4">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="thead-dark text-nowrap">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Passport Number</th>
                  <th scope="col">Food Preference</th>
                  <th scope="col">Issuing Country</th>
                  <th scope="col">Room Choice</th>
                  <th scope="col">Room Price</th>
                </tr>
              </thead>
              <tbody class="text-nowrap">
                <tr
                  v-for="(passenger, index) in item.forms.passengers"
                  :key="passenger.id"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ passenger.title }} {{ passenger.person_name }}</td>
                  <td>{{ passenger.dob }}</td>
                  <td>{{ passenger.passport_number }}</td>
                  <td>{{ passenger.food_preference }}</td>
                  <td>{{ passenger.issuing_country }}</td>
                  <td>{{ passenger.room_choice_id.room_name }}</td>
                  <td>Rp. {{ passenger.room_choice_id.room_price }}K</td>
                </tr>
                <tr>
                  <th colspan="7" class="text-right pr-5">Total Price</th>
                  <td>Rp. {{ item.total_price_amount }}K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- PASSENGER TABLE DETAIL END -->
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PassengerInfoComponent',
  data() {
    return {
      formLoading: false,
      passengers: [],
      passengersDetail: false
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    disabled() {
      return this.passengers.length > 0
    },
    item() {
      return this.TRANSACTION.data
    }
  },
  methods: {
    ...mapActions({
      CREATE_PASSENGERS: 'passengers/CREATE_PASSENGERS',
      GET_TRANSACTION: 'transactions/GET_TRANSACTION'
    })
  }
}
</script>

<style></style>
