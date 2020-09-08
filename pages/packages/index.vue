<template>
  <div id="top-package-page" class="packagesPage">
    <div class="container">
      <div class="row">
        <div class="col-10 col-lg-6 mx-auto mt-100 p-4 h-auto">
          <div class="section-heading mb-0 text-center">
            <span></span>
            <h4>{{ $t('packages.title') }}</h4>
            <p>{{ $t('packages.subtitle') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="PACKAGES.data" class="container mt-50 pb-4">
      <div v-for="item in PACKAGES.data" :key="item.id" class="row">
        <div class="col-12 col-lg-6 mx-auto my-4">
          <nuxt-link
            :to="
              `/packages/${item.id}/${item.name
                .replace(/\s/g, '-')
                .toLowerCase()}`
            "
          >
            <div class="card bg-light borderRad shadow-pack img-hover-zoom">
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
                        {{ $t('packages.more_details') }}...
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <nav v-if="PACKAGES.links" aria-label="Page navigation example">
        <ul class="pagination pagination-lg justify-content-center">
          <li v-if="PACKAGES.links.prev" class="page-item">
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
              PACKAGES.meta.current_page
            }}</a>
            <a v-else class="page-link border-0">Loading...</a>
          </li>
          <li v-if="PACKAGES.links.next" class="page-item">
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
    <div v-else class="container">
      <div class="row">
        <client-only>
          <div v-for="index in 3" :key="index" class="col-12 col-lg-4 my-5 ">
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

export default {
  name: 'PackagesPage',
  components: {},
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

    async changePage(action) {
      this.loading = true
      if (action === 'next') {
        this.page++
        await this.GET_PACKAGES(this.page)
        this.loading = false
        this.$scrollTo('#top-package-page', 1000)
      } else if (action === 'prev') {
        this.page--
        await this.GET_PACKAGES(this.page)
        this.loading = false
        this.$scrollTo('#top-package-page', 1000)
      }
    },
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
      title: `Tour Packages | CEO Travel GmbH`
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
  -webkit-box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
  -moz-box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
  box-shadow: 4px 4px 15px 0px rgb(169, 169, 169);
}
</style>
