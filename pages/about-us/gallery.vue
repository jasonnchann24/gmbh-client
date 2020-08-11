<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center">
            <span></span>
            <h4>Gallery</h4>
            <p>Our beautiful photos</p>
          </div>
        </div>
      </div>
      <div v-if="GALLERY.data" class="row mb-100">
        <li v-for="(item, index) in GALLERY.data" :key="item.id">
          <img
            :src="item.image_url"
            :class="
              `wow ${animations[Math.floor(Math.random() * animations.length)]}`
            "
            :data-wow-delay="`${index * 0.05}s`"
            :data-wow-durations="
              `${duration[Math.floor(Math.random() * duration.length)]}s`
            "
            :alt="item.image_url"
          />
        </li>
      </div>
      <div v-else class="row mb-100">
        <div v-for="index in 4" :key="index" class="col-6 mb-4">
          <content-placeholders :rounded="true">
            <content-placeholders-img />
          </content-placeholders>
        </div>
      </div>
      <div class="row">
        <nav
          v-if="GALLERY.links && GALLERY.meta.last_page > 1"
          aria-label="Page navigation example"
        >
          <ul class="pagination pagination-lg ">
            <li v-if="GALLERY.links.prev" class="page-item">
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
                GALLERY.meta.current_page
              }}</a>
              <a v-else class="page-link border-0">Loading...</a>
            </li>
            <li v-if="GALLERY.links.next" class="page-item">
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'GalleryPage',
  data() {
    return {
      animations: ['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'],
      duration: ['0.3', '0,5', '0,7'],
      page: 1,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      GALLERY: 'gallery/GALLERY'
    })
  },
  created() {
    this.GET_GALLERY(this.page)
  },
  methods: {
    ...mapActions({
      GET_GALLERY: 'gallery/GET_GALLERY'
    }),
    async changePage(action) {
      this.loading = true
      if (action === 'next') {
        this.page++
        await this.GET_GALLERY(this.page)
        this.loading = false
      } else if (action === 'prev') {
        this.page--
        await this.GET_GALLERY(this.page)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  height: 40vh;
  flex-grow: 1;
  margin: 1px;
}

li:last-child {
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
