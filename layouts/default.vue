<template>
  <div>
    <div id="mainTop" class="full-height position-ref">
      <Navbar />
      <nuxt />
      <Footer />
    </div>
    <modal-login />
    <div>
      <div
        id="myScrollBtn"
        v-scroll-to="{
          el: '#mainTop',
          duration: '1750'
        }"
      >
        <i
          class="fa fa-arrow-up text-dark bg-light p-4 rounded-pill shadow"
        ></i>
      </div>
    </div>
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

#myScrollBtn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 10px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}
</style>
