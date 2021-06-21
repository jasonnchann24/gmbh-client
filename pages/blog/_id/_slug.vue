<template>
  <div v-if="article" class="container mb-5 pb-5">
    <div class="row mt-5">
      <div class="col">
        <div class="section-heading dark text-center my-auto">
          <span></span>
          <h4 class="text-dark wow fadeInUp" data-wow-delay="0.5s">
            {{ article.title }}
          </h4>
          <p class="text-dark wow fadeInUp" data-wow-delay="0.6s">
            {{ article.created_at_formatted }}
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <div
          v-if="article.article_images && slides.length > 0"
          id="agile"
          key="1"
        >
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
      </div>
    </div>
    <hr />
    <div class="row mt-5">
      <div class="col  p-3 border rounded-lg">
        <p class="font-weight-bolder">Description</p>
        <p>{{ article.description }}</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <div v-html="article.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogShow',
  async fetch() {
    await this.$store.dispatch('articles/GET_ARTICLE', this.$route.params.id)
    this.ARTICLE.data.article_images.forEach(this.pushSlides)
  },

  data() {
    return {
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
      ARTICLE: 'articles/ARTICLE'
    }),
    article() {
      if (this.ARTICLE.data) {
        return this.ARTICLE.data
      }

      return null
    }
  },

  methods: {
    syncSliders(slideNext) {
      this.$refs.mainHero.goTo(slideNext)
    },
    pushSlides(item, index) {
      this.slides.push(item.image_url)
    }
  },
  head() {
    return {
      title: this.article.title + ' | CEO Trade & Travel GmbH',
      description: 'Trade and Travel Blog ' + this.article.title
    }
  }
}
</script>

<style scoped>
#agile {
  margin: 0 auto;
  max-width: 600px;
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
