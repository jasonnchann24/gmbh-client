<template>
  <!-- PASSENGER INFO -->
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="text-uppercase">1. Passengers Information</h5>
        </div>
        <div v-if="item.forms.passengers.length == 0" class="col-12 col-md-6">
          <button
            class="btn btn-block btn-primary"
            :disabled="disabled"
            @click="addPassengers"
          >
            Add Passengers Information
          </button>
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
      <!-- FORM START -->
      <form
        v-if="item.forms.passengers.length < 1"
        @submit.prevent="createPassengers"
      >
        <div class="row mt-2">
          <div
            v-for="(passenger, index) in passengers"
            :key="index"
            class="col-12 col-md-6 my-2 border p-5"
          >
            <p>Passenger Number {{ index + 1 }}</p>
            <div class="form-group">
              <label :for="`t-form-name${index}`">Full Name</label>
              <input
                :id="`t-form-name${index}`"
                v-model="passenger.person_name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="form-group row">
              <div class="col-6">
                <label :for="`t-form-title${index}`">Title</label>
                <select
                  :id="`t-form-title${index}`"
                  v-model="passenger.title"
                  class="form-control form-control-sm"
                  required
                >
                  <option value="" disabled selected>Choose...</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option Value="Mrs.">Mrs.</option>
                </select>
              </div>
              <div class="col-6">
                <label :for="`t-form-food${index}`">Food Preference</label>
                <select
                  :id="`t-form-food${index}`"
                  v-model="passenger.food_preference"
                  class="form-control form-control-sm"
                  required
                >
                  <option value="" disabled selected>Choose...</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Muslim-Food">Muslim-Food</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label :for="`t-form-dob${index}`">Date of Birth</label>
              <input
                :id="`t-form-dob${index}`"
                v-model="passenger.dob"
                type="date"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label :for="`t-form-passport${index}`">Passport Number</label>
              <input
                :id="`t-form-passport${index}`"
                v-model="passenger.passport_number"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="form-group row">
              <div class="col-12 col-md-6">
                <label :for="`t-form-issued${index}`"
                  >Passport Issued Date</label
                >
                <input
                  :id="`t-form-issued${index}`"
                  v-model="passenger.issued_date"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label :for="`t-form-expiry${index}`"
                  >Passport Expiry Date</label
                >
                <input
                  :id="`t-form-expiry${index}`"
                  v-model="passenger.expiry_date"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label :for="`t-form-country${index}`">Issuing Country</label>
              <input
                :id="`t-form-country${index}`"
                v-model="passenger.issuing_country"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label :for="`t-form-room${index}`">Room Choice</label>
              <select
                :id="`t-form-room${index}`"
                v-model="passenger.room_choice_id"
                class="form-control"
                required
              >
                <option value="" disabled selected>Choose...</option>
                <option
                  v-for="roomChoice in item.package.room_choices"
                  :key="roomChoice.id"
                  :value="roomChoice.id"
                  >{{ roomChoice.room_name }} - Rp.
                  {{ roomChoice.room_price }}.000</option
                >
              </select>
            </div>
          </div>
        </div>
        <div v-if="passengers.length > 0" class="row">
          <div class="col-12 p-0 mt-2">
            <button
              v-if="!formLoading"
              type="submit"
              class="btn btn-block btn-lg btn-success"
            >
              Submit All Passengers
            </button>
            <button v-else class="btn btn-block btn-lg btn-success" disabled>
              Submitting All Passengers...
            </button>
          </div>
        </div>
      </form>
      <!-- FORM END -->
      <!-- PASSENGER TABLE DETAIL START -->
      <div v-if="passengersDetail" class="row mt-4">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
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
              <tbody>
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
      let i
      for (i = 0; i < passengersCount; i++) {
        this.passengers.push({
          transaction_id: this.$route.params.id,
          person_name: '',
          title: '',
          dob: null,
          passport_number: '',
          issued_date: null,
          expiry_date: null,
          issuing_country: '',
          food_preference: '',
          room_choice_id: null
        })
      }

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

<style></style>
