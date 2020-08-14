<template>
  <div>
    <section class="ceo-gmbh-welcome-area bg-img bg-overlay">
      <div class="hero-container">
        <img
          src="/images/under-construct.jpg"
          class="img-fluid"
          width="100%"
          style="max-height: 100vh; object-fit: cover; filter: brightness(0.8);"
          alt="customize-tour-hero-image"
          loading="lazy"
        />
        <h1
          class="hero-text text-uppercase display-1 font-weight-bold text-white"
        >
          SITE UNDER CONSTRUCTION
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PhotoExplorePage'
}
</script>

<style scoped>
.hero-container {
  position: relative;
  text-align: center;
  color: white;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 30px;
}

@media screen and (max-width: 768px) {
  .hero-text {
    font-size: 1.2em;
    letter-spacing: 10px;
  }
}
</style>
