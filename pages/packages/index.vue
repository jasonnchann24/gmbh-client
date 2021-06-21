<template>
  <div class="packagesPage">
    <div class="container">
      <div class="row">
        <div class="col-10 col-lg-6 mx-auto mt-100 p-4 h-auto">
          <div class="section-heading mb-0 text-center">
            <span></span>
            <h4>Our Packages</h4>
            <p>Click for more detail</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="PACKAGES.data" class="container mt-50 pb-4">
      <div v-for="item in PACKAGES.data" :key="item.id" class="row">
        <div class="col-12 col-lg-10 mx-auto my-4">
          <nuxt-link
            :to="
              `/packages/${item.id}/${item.name
                .replace(/\s/g, '-')
                .toLowerCase()}`
            "
          >
            <div
              class="card bg-light borderRad shadow-pack img-hover-zoom mx-auto border-0"
              style="max-width: 35rem;"
            >
              <div class="card-header py-4 text-center">
                <div class="section-heading mb-0 dark text-center">
                  <h4 class="mb-0">{{ item.name }}</h4>
                </div>
              </div>
              <div class="card-body p-0">
                <img :src="item.image_url" class="package-image" alt="" />
              </div>
              <div class="card-footer" style="overflow: hidden;">
                <div class="row">
                  <div class="col-12">
                    <p
                      class="pt-lg-4 pl-lg-4 pr-lg-4 pb-lg-0 pt-2 pl-2 pr-2 pb-0 crop-text-1"
                      style="line-height: 1.8em; "
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 my-2 text-right">
                    <nuxt-link
                      :to="
                        `/packages/${item.id}/${item.name
                          .replace(/\s/g, '-')
                          .toLowerCase()}`
                      "
                    >
                      <button class="btn btn-outline-info ">
                        More Details...
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div v-if="PACKAGES.meta" class="row mt-100 mb-100">
        <div
          v-if="PACKAGES.meta.last_page > 1"
          class="col-6 mx-auto bg-light borderRad shadow-pack"
          style="height: 150px"
        >
          <pagination
            :object-to-paginate="PACKAGES"
            :store-action="'packages/GET_PACKAGES'"
          />
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="row">
        <client-only>
          <div v-for="index in 3" :key="index" class="col-4 my-5 ">
            <content-placeholders :rounded="true">
              <content-placeholders-heading />
              <content-placeholders-img />
            </content-placeholders>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Core/Pagination'

export default {
  name: 'PackagesPage',
  components: {
    Pagination
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
  created() {
    this.getPackages(1)
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
  },
  head() {
    return {
      title: `Tour Packages | CEO Trade & Travel GmbH`
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

.img-hover-zoom {
  overflow: hidden;
}

.img-hover-zoom {
  transition: transform 1.1s ease;
}

.img-hover-zoom:hover {
  transform: scale(1.025);
}

.packagesPage {
  background-image: url('/images/bg-packages-page.jpg');
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
  -webkit-box-shadow: 4px 4px 15px 0px rgb(104, 104, 104);
  -moz-box-shadow: 4px 4px 15px 0px rgb(104, 104, 104);
  box-shadow: 4px 4px 15px 0px rgb(104, 104, 104);
}
</style>
