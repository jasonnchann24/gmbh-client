<template>
  <div class="packagesPage">
    <div class="container">
      <div class="row">
        <div
          class="col-10 col-lg-6 mx-auto mt-100 p-4 bg-light h-auto borderRad shadow-pack"
        >
          <div class="section-heading mb-0 dark text-center">
            <span></span>
            <h4>Our Packages</h4>
            <p>Click for more detail</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!$fetchState.pending && PACKAGES.data"
      class="container mt-50 pb-4"
    >
      <div v-for="item in PACKAGES.data" :key="item.id" class="row">
        <div class="col-12 col-lg-10 mx-auto my-4">
          <div class="card bg-light borderRad shadow-pack">
            <div class="card-header py-4 text-center">
              <div class="section-heading mb-0 dark text-center">
                <h4 class="mb-0">{{ item.name }}</h4>
              </div>
            </div>
            <div class="card-body p-0">
              <img :src="item.image_url" class="package-image" alt="" />
            </div>
            <div class="card-footer">
              <p class="p-lg-4 p-2 crop-text-1" style="line-height: 1.8em; ">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div v-for="index in 3" :key="index" class="col-4 my-5">
        <content-placeholders :rounded="true">
          <content-placeholders-heading />
          <content-placeholders-img />
        </content-placeholders>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PackagesPage',
  fetch() {
    this.GET_PACKAGES()
  },
  data() {
    return {
      loading: false,
      errors: null,
      show: true,
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      PACKAGES: 'packages/PACKAGES'
    })
  },
  methods: {
    ...mapActions({
      GET_PACKAGES: 'packages/GET_PACKAGES'
    }),

    async getPackages(page = 1) {
      this.loading = true
      try {
        await this.GET_PACKAGES(page)
      } catch (e) {
        this.errors = e
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.crop-text-1 {
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.packagesPage {
  background-image: url('https://images.unsplash.com/photo-1596501047693-0c563fe3a6be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80');
  background-size: cover;
}

.package-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
a:hover {
  text-decoration: none;
}

.borderRad {
  border-radius: 15px;
}

.shadow-pack {
  -webkit-box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
  -moz-box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
  box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
}
</style>
