<template>
  <div class="pagination-wrapper">
    <svg
      class="btn-page btn-page--prev"
      height="96"
      viewBox="0 0 24 24"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
      @click="refreshList('prev')"
    >
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
      <path d="M0-.5h24v24H0z" fill="none" />
    </svg>

    <div class="pagination-container">
      <div class="little-dot  little-dot--first"></div>
      <div class="little-dot">
        <div class="big-dot-container">
          <div class="big-dot"></div>
        </div>
      </div>
      <div class="little-dot  little-dot--last"></div>
    </div>

    <svg
      class="btn-page btn-page--next"
      height="96"
      viewBox="0 0 24 24"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
      @click="refreshList('next')"
    >
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
      <path d="M0-.25h24v24H0z" fill="none" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'InfinitePagination',
  props: {
    objectToPaginate: {
      type: Object,
      default: () => {}
    },
    storeAction: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currPage: 1,
      destinationPage: 1
    }
  },
  methods: {
    getList(page) {
      this.$store.dispatch(`${this.storeAction}`, page)
    },

    refreshList(action) {
      this.currPage = this.objectToPaginate.meta.current_page
      if (action === 'next') {
        this.destinationPage = this.currPage + 1
        if (this.destinationPage > this.objectToPaginate.meta.last_page) {
          this.destinationPage = 1
        }
      } else if (action === 'prev') {
        this.destinationPage = this.currPage - 1
        if (this.destinationPage === 0) {
          this.destinationPage = this.objectToPaginate.meta.last_page
        }
      }

      this.getList(this.destinationPage)
    }
  }
}
</script>

<style></style>
