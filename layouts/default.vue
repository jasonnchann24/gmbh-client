<template>
  <div class="full-height position-ref">
    <client-only>
      <Navbar />
    </client-only>
    <nuxt />
    <client-only>
      <Footer />
    </client-only>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="css">
html,
body {
  height: 100vh;
}

.full-height {
  height: 100vh;
}

.position-ref {
  position: relative;
}
</style>
