<template>
  <div>
    <h5 class="mb-0 text-center">Passenger {{ idNumber }}</h5>
    <div :id="`stepsAccordion-${idNumber}`" class="accordion">
      <div class="card border-0 text-center my-4 shadow">
        <div class="card-header bg-light">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                :data-target="`#stepOne-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepOne-${idNumber}`"
              >
                Step One
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                :data-target="`#stepTwo-${idNumber}`"
                role="button"
                aria-expanded="false"
                :aria-controls="`stepTwo-${idNumber}`"
                >Step Two</a
              >
            </li>
          </ul>
        </div>
        <div
          :id="`stepOne-${idNumber}`"
          class="collapse "
          :data-parent="`#stepsAccordion-${idNumber}`"
        >
          <div class="card-body ">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              class="btn btn-primary"
              data-toggle="collapse"
              :data-target="`#stepTwo-${idNumber}`"
              role="button"
              aria-expanded="false"
              :aria-controls="`stepTwo-${idNumber}`"
              >Go somewhere</a
            >
          </div>
        </div>
        <div
          :id="`stepTwo-${idNumber}`"
          class="collapse"
          :data-parent="`#stepsAccordion-${idNumber}`"
        >
          <div class="card-body ">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'FormStepperOne',
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
      }
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
  mounted() {},

  methods: {
    ...mapMutations({
      PUSH_PASSENGER: 'stepper-form/PUSH_PASSENGER'
    })
  }
}
</script>

<style scoped>
.card-header .nav-link[aria-expanded='true'] {
  background-color: #fff;
  color: blue;
}
</style>
