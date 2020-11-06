<template>
  <div>
    <div v-if="GALLERY.length > 0">
      <client-only>
        <carousel-3d
          :border="0"
          :autoplay="true"
          :count="GALLERY.length"
          @last-slide="onLastSlide"
        >
          <slide
            v-for="(item, i) in GALLERY"
            :key="i"
            :index="i"
            style="background-color:#fff;"
          >
            <img :src="item.image_url" style="border-radius: 5px;" />
          </slide>
        </carousel-3d>
      </client-only>
      <p class="text-muted d-block d-sm-none">Slide to view more photos.</p>
    </div>
    <div v-else>
      <h3 class="text-danger">
        Sorry, No gallery found for this package.
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CarouselGallery',
  data() {
    return {
      page: 1
    }
  },

  computed: {
    ...mapGetters({
      PACKAGE_GALLERY: 'packages/PACKAGE_GALLERY',
      GALLERY: 'packages/GALLERY'
    })
  },
  mounted() {
    this.getGallery()
  },
  methods: {
    ...mapActions({
      GET_GALLERY: 'packages/GET_GALLERY'
    }),
    onLastSlide(index) {
      if (this.PACKAGE_GALLERY.links.next != null) {
        this.page++
        this.getGallery()
      }
    },
    async getGallery() {
      try {
        await this.GET_GALLERY({
          id: this.$route.params.id,
          page: this.page
        })
        if (this.GALLERY.length > 0) {
          this.$swal({
            toast: true,
            position: 'bottom',
            width: '100%',
            icon: 'success',
            title: `New Gallery Photos Fetched!`,
            showConfirmButton: false,
            timer: 3200,
            timerProgressBar: true
          })
        }
      } catch (e) {
        this.$swal({
          toast: true,
          position: 'bottom',
          width: '100%',
          icon: 'error',
          title: `Failed to fetch new gallery photos.!`,
          showConfirmButton: false,
          timer: 3200,
          timerProgressBar: true
        })
      }
    }
  }
}
</script>

<style></style>
