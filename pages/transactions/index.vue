<template>
  <div>
    <div v-if="TRANSACTIONS.data">
      <!-- ***** Listing Destinations Area Start ***** -->
      <section
        class="ceo-gmbh-listing-destinations-area section-padding-100-50"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading dark text-center">
                <span></span>
                <h4>Bookings</h4>
                <p>Click for more detail</p>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Single Features Area -->
            <div
              v-for="item in TRANSACTIONS.data"
              :key="item.id"
              class="col-12 col-sm-6 col-lg-4"
            >
              <nuxt-link
                :to="`/transactions/${item.id}`"
                tag="a"
                style="text-decoration: none;"
              >
                <div class="single-features-area mb-50">
                  <img
                    :src="item.package.image_url"
                    class="package-image"
                    alt=""
                  />
                  <!-- Price -->
                  <div class="price-start">
                    <p v-if="badge(item)" class="bg-success">
                      Complete
                    </p>
                    <p v-else class="bg-danger">Incomplete</p>
                  </div>
                  <div
                    class="feature-content d-flex align-items-center justify-content-between"
                  >
                    <div class="feature-title">
                      <h5>{{ item.package.name }}</h5>
                      <p>{{ item.transaction_number }}</p>
                      <p>{{ item.created_at }}</p>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <nav v-if="TRANSACTIONS.links" aria-label="Page navigation example">
            <ul class="pagination pagination-lg ">
              <li v-if="TRANSACTIONS.links.prev" class="page-item">
                <a
                  class="page-link border-0"
                  href="javascript:void(0);"
                  aria-label="Previous"
                  @click="changePage('prev')"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item disabled ">
                <a v-if="!loading" class="page-link border-0" href="#">{{
                  TRANSACTIONS.meta.current_page
                }}</a>
                <a v-else class="page-link border-0">Loading...</a>
              </li>
              <li v-if="TRANSACTIONS.links.next" class="page-item">
                <a
                  class="page-link border-0"
                  href="javascript:void(0)"
                  aria-label="Next"
                  @click="changePage('next')"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <!-- ***** Listing Destinations Area End ***** -->
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TransactionsPage',
  middleware: ['auth'],
  data() {
    return {
      page: 1,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS'
    })
  },
  created() {
    this.GET_TRANSACTIONS()
  },
  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS'
    }),
    badge(item) {
      return (
        item.forms.emergency_contact &&
        item.forms.master_passenger &&
        item.forms.transfer_evidence &&
        item.forms.passengers.length > 0
      )
    },
    async changePage(action) {
      this.loading = true
      if (action === 'next') {
        this.page++
        await this.GET_TRANSACTIONS(this.page)
        this.loading = false
      } else if (action === 'prev') {
        this.page--
        await this.GET_TRANSACTIONS(this.page)
        this.loading = false
      }
    }
  },
  head() {
    return {
      title: `Transactions | CEO Trade & Travel GmbH`
    }
  }
}
</script>

<style scoped>
.package-image {
  height: 338px;
  width: 600px;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
