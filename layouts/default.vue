<template>
  <div>
    <div class="full-height position-ref">
      <Navbar />
      <nuxt />
      <Footer />
    </div>
    <modal-login />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ModalLogin from '@/components/index/ModalLogin'

export default {
  components: {
    Navbar,
    Footer,
    ModalLogin
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
