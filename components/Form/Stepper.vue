<template>
  <div>
    <h4 class="my-2 py-2 text-center">
      Passenger {{ parseInt(idNumber) + 1 }} - {{ passenger.title }}
      {{ passenger.person_name }}
    </h4>
    <div :id="`stepsAccordion-${idNumber}`" class="accordion">
      <div
        class="card border-0 text-center my-4 shadow"
        style="border-radius: 15px"
      >
        <div class="card-header">
          <ul
            class="nav nav-tabs nav-fill flex-column flex-sm-row card-header-tabs mt-4"
          >
            <li class="nav-item">
              <a
                class="flex-sm-fill nav-link"
                data-toggle="collapse"
                :data-target="`#stepOne-${idNumber}`"
                role="button"
                aria-expanded="true"
                :aria-controls="`stepOne-${idNumber}`"
              >
                Person Details
              </a>
            </li>
            <li class="nav-item">
              <a
                v-if="!stepTwoDisable"
                class="flex-sm-fill nav-link"
                data-toggle="collapse"
                :data-target="`#stepTwo-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepTwo-${idNumber}`"
                >Passport</a
              >
              <a v-else class="flex-sm-fill nav-link disabled"
                >Passport (Disabled)</a
              >
            </li>
            <li class="nav-item">
              <a
                v-if="!stepThreeDisable"
                class="flex-sm-fill nav-link"
                data-toggle="collapse"
                :data-target="`#stepThree-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepThree-${idNumber}`"
                >Review Data</a
              >
              <a v-else class="flex-sm-fill nav-link disabled"
                >Review (Disabled)</a
              >
            </li>
          </ul>
        </div>
        <form @submit.prevent="pushPassenger">
          <div
            :id="`stepOne-${idNumber}`"
            class="collapse show "
            :data-parent="`#stepsAccordion-${idNumber}`"
          >
            <div class="card-body ">
              <div class="row">
                <div class="col-12 col-lg-8 my-4 mx-auto text-left">
                  <div class="form-group">
                    <label :for="`t-form-name${idNumber}`">Full Name</label>
                    <input
                      :id="`t-form-name${idNumber}`"
                      v-model="passenger.person_name"
                      type="text"
                      class="form-control"
                      placeholder="Enter passenger's full name"
                      required
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-6">
                      <label :for="`t-form-title${idNumber}`">Title</label>
                      <select
                        :id="`t-form-title${idNumber}`"
                        v-model="passenger.title"
                        class="form-control"
                        required
                      >
                        <option value="" disabled selected>Choose...</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option Value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <label :for="`t-form-food${idNumber}`"
                        >Food Preference</label
                      >
                      <select
                        :id="`t-form-food${idNumber}`"
                        v-model="passenger.food_preference"
                        class="form-control"
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
                    <label :for="`t-form-dob${idNumber}`">Date of Birth</label>
                    <input
                      :id="`t-form-dob${idNumber}`"
                      v-model="passenger.dob"
                      type="date"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label :for="`t-form-room${idNumber}`">Room Choice</label>
                    <select
                      :id="`t-form-room${idNumber}`"
                      v-model="room_choice"
                      class="form-control"
                      required
                    >
                      <option value="" disabled selected>Choose...</option>
                      <option
                        v-for="roomChoice in item.package.room_choices"
                        :key="roomChoice.id"
                        :value="roomChoice"
                        >{{ roomChoice.room_name }} - Rp.
                        {{ roomChoice.room_price }}.000</option
                      >
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 text-right bg-white">
              <a
                v-if="!stepTwoDisable"
                class="btn btn-lg btn-primary text-white my-2 "
                data-toggle="collapse"
                :data-target="`#stepTwo-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepTwo-${idNumber}`"
                >Next</a
              >
              <button v-else class="btn btn-secondary text-white my-2" disabled>
                Please complete all fields
              </button>
            </div>
          </div>
          <div
            :id="`stepTwo-${idNumber}`"
            class="collapse"
            :data-parent="`#stepsAccordion-${idNumber}`"
          >
            <div class="card-body ">
              <div class="row">
                <div class="col-12 col-lg-8 my-4 mx-auto text-left">
                  <div class="form-group">
                    <label :for="`t-form-passport${idNumber}`"
                      >Passport Number</label
                    >
                    <input
                      :id="`t-form-passport${idNumber}`"
                      v-model="passenger.passport_number"
                      type="text"
                      class="form-control"
                      placeholder="Enter passenger's passport number"
                      required
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-12 col-md-6">
                      <label :for="`t-form-issued${idNumber}`"
                        >Passport Issued Date</label
                      >
                      <input
                        :id="`t-form-issued${idNumber}`"
                        v-model="passenger.issued_date"
                        type="date"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <label :for="`t-form-expiry${idNumber}`"
                        >Passport Expiry Date</label
                      >
                      <input
                        :id="`t-form-expiry${idNumber}`"
                        v-model="passenger.expiry_date"
                        type="date"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label :for="`t-form-country${idNumber}`"
                      >Issuing Country</label
                    >
                    <input
                      :id="`t-form-country${idNumber}`"
                      v-model="passenger.issuing_country"
                      type="text"
                      class="form-control"
                      placeholder="Passport issuing country"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 text-right bg-white">
              <a
                v-if="!stepThreeDisable"
                class="btn btn-lg btn-primary text-white my-2 "
                data-toggle="collapse"
                :data-target="`#stepThree-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepThree-${idNumber}`"
                >Next</a
              >
              <button v-else class="btn btn-secondary text-white my-2" disabled>
                Please complete all fields
              </button>
            </div>
          </div>
          <div
            :id="`stepThree-${idNumber}`"
            class="collapse"
            :data-parent="`#stepsAccordion-${idNumber}`"
          >
            <div class="card-body ">
              <div class="row">
                <div class="col-12 col-lg-6 my-4 mx-auto text-left">
                  <div
                    v-if="!stepTwoDisable && !stepThreeDisable"
                    class="table-responsive"
                  >
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Full Name</th>
                          <td class="text-left">
                            {{ passenger.title }} {{ passenger.person_name }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Date of Birth</th>
                          <td class="text-left">{{ passenger.dob }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Passport Number</th>
                          <td class="text-left">
                            {{ passenger.passport_number }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Passport Issued Date</th>
                          <td class="text-left">{{ passenger.issued_date }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Passport Expiry Date</th>
                          <td class="text-left">{{ passenger.expiry_date }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Passport Issuing Country</th>
                          <td class="text-left">
                            {{ passenger.issuing_country }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Food Preference</th>
                          <td class="text-left">
                            {{ passenger.food_preference }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Room Choice</th>
                          <td class="text-left">
                            {{ room_choice.room_name }} - Rp.
                            {{ room_choice.room_price }}.000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 text-right bg-white">
              <div class="row">
                <div class="col-12 text-center">
                  <!-- v-if="!stepTwoDisable" -->
                  <button
                    class="btn btn-lg btn-success text-white my-2 px-4"
                    type="submit"
                  >
                    Save Passenger
                  </button>
                  <!-- <button v-else class="btn btn-secondary text-white my-2" disabled>
                Please complete all fields
              </button> -->
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'FormStepperOne',
  middleware: ['auth'],
  props: {
    idNumber: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      passenger: {
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
      },
      room_choice: null
    }
  },

  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    item() {
      return this.TRANSACTION.data
    },
    stepTwoDisable() {
      const rules =
        this.passenger.person_name === '' ||
        this.passenger.title === '' ||
        this.passenger.dob === null ||
        this.room_choice === null ||
        this.passenger.food_preference === ''

      return rules
    },
    stepThreeDisable() {
      const rules =
        this.passenger.passport_number === '' ||
        this.passenger.issued_date === null ||
        this.passenger.expiry_date === null ||
        this.passenger.issuing_country === '' ||
        this.stepTwoDisable
      return rules
    }
  },
  mounted() {},

  methods: {
    ...mapMutations({
      PUSH_PASSENGER: 'stepper-form/PUSH_PASSENGER'
    }),
    pushPassenger() {
      this.passenger.room_choice_id = this.room_choice.id
      if (!this.stepTwoDisable && !this.stepThreeDisable) {
        this.PUSH_PASSENGER(this.passenger)
      }
    }
  }
}
</script>

<style scoped>
.card-header .nav-link[aria-expanded='true'] {
  background-color: #fff;
  color: #408bb9 !important;
}

.nav-link {
  border-radius: 10px 10px 0 0;
  color: #fff !important;
}

@media screen and (max-width: 768px) {
  .nav-link {
    border-radius: 10px 10px 10px 10px;
    margin: 5px;
  }
}

.card-header {
  background-color: #6ea8cc;
}
</style>
