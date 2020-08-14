<template>
  <div>
    <div v-if="item && !loading">
      <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
        <div class="hero-container">
          <img
            :src="item.package.image_url"
            class="img-fluid"
            width="100%"
            style="max-height: 400px; object-fit: cover; filter: brightness(0.8);"
            :alt="`${item.package.name}-package`"
            loading="lazy"
          />
          <h1
            class="hero-text text-uppercase display-1 font-weight-bold text-white"
          >
            {{ item.package.name }}
          </h1>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading py-5 mb-0">
                <h4 class="text-dark">BOOKING DETAIL</h4>
                <p class="text-dark">
                  Transaction Number - {{ item.transaction_number }}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 text-left">
              <p>
                Passengers : {{ item.adults + item.children + item.infants }}
              </p>
              <p>
                Emergency Contact :
                <span v-if="item.forms.emergency_contact">{{
                  item.forms.emergency_contact.name
                }}</span>
                <span v-else class="text-danger">Not found</span>
              </p>
              <p>
                Master Passenger :
                <span v-if="item.forms.master_passenger">{{
                  item.forms.master_passenger.email
                }}</span>
                <span v-else class="text-danger">Not found</span>
              </p>
              <p>
                Transaction Slip :
                <span v-if="item.forms.transfer_evidence">Uploaded</span>
                <span v-else class="text-danger">Not found</span>
              </p>
            </div>
            <div class="col-12 col-md-6 text-left">
              <p>
                Total Price :
                <span v-if="item.total_price_amount == 0" class="text-danger"
                  >Please complete the details first.</span
                ><span v-else>Rp. {{ item.total_price_amount }}.000</span>
              </p>
              <p>Created at : {{ item.created_at }}</p>
              <p>Created by : {{ item.user.name }} / {{ item.user.email }}</p>
              <p v-if="item.adults > 0">
                Adults : {{ item.adults }}
                <span v-if="item.children > 0">
                  Children : {{ item.children }}</span
                >
                <span v-if="item.infants > 0">
                  Infants : {{ item.infants }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading pt-5 pb-2 mb-0">
              <h4 class="text-dark">BOOKING FORM</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- PASSENGER SECTION -->
      <passenger-info />
      <!-- MASTER PASSENGER -->
      <master-passenger />
      <!-- EMERGENCY CONTACT SECTION -->
      <emergency-contact />
      <!-- TRANSACTION SLIP SECTION-->
      <transaction-slip />
    </div>
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
import { mapActions, mapGetters } from 'vuex'
import PassengerInfo from '@/components/Transaction/PassengerInfo'
import MasterPassenger from '@/components/Transaction/MasterPassenger'
import EmergencyContact from '@/components/Transaction/EmergencyContact'
import TransactionSlip from '@/components/Transaction/TransactionSlip'
export default {
  name: 'TransactionShow',
  middleware: ['auth'],
  components: {
    PassengerInfo,
    MasterPassenger,
    EmergencyContact,
    TransactionSlip
  },
  async fetch() {
    this.loading = true
    try {
      await this.GET_TRANSACTION(this.$route.params.id)
    } catch (e) {
      this.errors = true
    } finally {
      this.loading = false
    }
  },
  data() {
    return {
      loading: false,
      formLoading: false,
      errors: false,
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
      CREATE_PASSENGERS: 'passengers/CREATE_PASSENGERS',
      CREATE_MASTER_PASSENGER: 'passengers/CREATE_MASTER_PASSENGER'
    })
  },
  head() {
    return {
      title: `Transaction Detail | CEO Travel GmbH`
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
</style>
