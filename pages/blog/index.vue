<template>
  <div class="container pb-5 mb-5">
    <div class="row mt-5 mb-5">
      <div class="col text-center">
        <div class="section-heading dark text-center my-auto">
          <span></span>
          <h4 class="text-dark wow fadeInUp" data-wow-delay="0.5s">
            Blog
          </h4>
          <p class="text-dark wow fadeInUp" data-wow-delay="0.6s">
            CEO Travel & Trade Blog
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div v-for="article in ARTICLES.data" :key="article.id" class="col-12">
        <div class="card my-3 shadow-sm border">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-lg-6">
                <h5 class="font-weight-bold display-5">
                  {{ article.title }}
                </h5>
              </div>
            </div>

            <div class="row">
              <div class="col text-right">
                <p class="text-muted mb-0">
                  {{ article.created_at_formatted }}
                </p>
                <nuxt-link
                  :to="`/blog/${article.id}/${sluggify(article.title)}`"
                  >Read More ...</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Blog',
  async fetch() {
    await this.$store.dispatch('articles/GET_ARTICLES')
  },
  computed: {
    ...mapGetters({
      ARTICLES: 'articles/ARTICLES'
    })
  },
  methods: {
    sluggify(text) {
      return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
    }
  }
}
</script>

<style></style>
