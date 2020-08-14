<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-100">
          <div class="section-heading dark text-center">
            <span></span>
            <h4>Gallery</h4>
            <p>Our beautiful photos</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="GALLERY.data && slides.length > 0" id="agile" key="1">
        <client-only>
          <agile
            v-if="slides.length > 0"
            ref="mainHero"
            class="main slider-for"
            :options="options1"
            :as-nav-for="asNavFor1"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="slide"
              :class="`slide--${index}`"
            >
              <img :src="slide" />
            </div>
          </agile>
          <agile
            v-if="slides.length > 0"
            ref="thumbnails"
            class="thumbnails slider-nav"
            :options="options2"
            :as-nav-for="asNavFor2"
            @before-change="syncSliders($refs.thumbnails.getCurrentSlide())"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="slide slide--thumbniail"
              :class="`slide--${index}`"
              @click="
                $refs.thumbnails.goTo(index)
                syncSliders(index)
              "
            >
              <img :src="slide" />
            </div>
            <template slot="prevButton"
              ><i class="fas fa-chevron-left"></i
            ></template>
            <template slot="nextButton"
              ><i class="fas fa-chevron-right"></i
            ></template>
          </agile>
        </client-only>
      </div>
      <div v-else key="2" class="row mb-100 mx-5 px-2 text-center">
        <div v-for="index in 2" :key="index" class="col-12 mb-4">
          <client-only>
            <content-placeholders :rounded="true">
              <content-placeholders-img />
            </content-placeholders>
          </client-only>
        </div>
      </div>
    </transition>

    <div class="row mx-5 justify-content-center mb-100">
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'GalleryPage',

  data() {
    return {
      page: 1,
      loading: false,
      loaded: false,
      asNavFor1: [this.$refs.thumbnails],
      asNavFor2: [this.$refs.mainHero],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: false
            }
          }
        ]
      },

      slides: []
    }
  },

  computed: {
    ...mapGetters({
      GALLERY: 'gallery/GALLERY'
    })
  },
  created() {
    this.getGallery(this.page)
  },

  methods: {
    ...mapActions({
      GET_GALLERY: 'gallery/GET_GALLERY'
    }),
    syncSliders(slideNext) {
      this.$refs.mainHero.goTo(slideNext)
    },
    async getGallery(page) {
      await this.GET_GALLERY(page)
      await this.GALLERY.data.forEach(this.pushSlides)
      this.loaded = true
    },
    pushSlides(item, index) {
      this.slides.push(item.image_url)
    },
    async changePage(action) {
      this.loading = true
      if (action === 'next') {
        this.page++
        this.slides = []
        await this.getGallery(this.page)
        this.loading = false
      } else if (action === 'prev') {
        this.page--
        this.slides = []

        await this.getGallery(this.page)
        this.loading = false
      }
    }
  },
  head() {
    return {
      title: 'Gallery | CEO Travel GmbH'
    }
  }
}
</script>

<style scoped>
#agile {
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}
.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 450px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
