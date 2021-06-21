<template>
  <div>
    <header id="header" class="header_area border-bottom" style="height:125px">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 h-100">
            <nav class="h-100 navbar navbar-expand-lg">
              <nuxt-link to="/" class="navbar-brand" tag="a">
                <img
                  src="/images/new-logo-trade-travel-gmbh.png"
                  width="175"
                  height="175"
                  alt="logo ceo gmbh trade and travel"
                  @click="navbarToggle"
                />
              </nuxt-link>
              <button
                id="navbar-toggle"
                class="navbar-toggler m-0 "
                type="button"
                data-toggle="collapse"
                data-target="#dorneNav"
                aria-controls="dorneNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="showMethod"
              >
                <span id="toggle-icn" class="fa fa-bars text-secondary"></span>
              </button>
              <!-- Nav -->
              <div
                id="dorneNav"
                class="collapse navbar-collapse bg-white animate slideIn"
              >
                <ul id="dorneMenu" class="navbar-nav mr-auto ml-lg-5">
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown-1"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Our Services
                    </a>
                    <div
                      class="dropdown-menu  animate slideIn"
                      aria-labelledby="navbarDropdown"
                    >
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/ticketing"
                          >Ticketing</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/packages"
                          >Tour Packages</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link
                          class="dropdown-item"
                          to="/photography-exploration"
                          >Photography Exploration</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/custom-tour"
                          >Custom Tour</nuxt-link
                        >
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown-2"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                    <div
                      class="dropdown-menu animate slideIn"
                      aria-labelledby="navbarDropdown"
                    >
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/about-us/contact"
                          >Contact Us</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link
                          class="dropdown-item"
                          to="/about-us/company-profile"
                          >Company Profile</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/about-us/gallery"
                          >Gallery</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link
                          class="dropdown-item"
                          to="/about-us/testimony"
                          >Testimony</nuxt-link
                        >
                      </div>
                    </div>
                  </li>
                </ul>
                <ul id="dorneMenu2" class="navbar-nav ml-auto mr-lg-5">
                  <li v-if="authenticated" class="nav-item dropdown">
                    <a
                      id="navbarDropdown-3"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Welcome, {{ user.name.split(' ')[0] }}
                    </a>
                    <div
                      class="dropdown-menu animate slideIn"
                      aria-labelledby="navbarDropdown"
                      style="width: 100%;"
                    >
                      <div @click="navbarToggle">
                        <nuxtLink
                          to="/transactions"
                          class="dropdown-item"
                          tag="a"
                          >Transactions</nuxtLink
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxtLink to="/settings" class="dropdown-item" tag="a"
                          >Settings</nuxtLink
                        >
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item"
                        @click="
                          logout()
                          navbarToggle()
                        "
                        >Logout</a
                      >
                    </div>
                  </li>
                </ul>
                <!-- Signin btn -->
                <div v-if="!authenticated" class="ceo-gmbh-signin-btn mr-lg-5">
                  <a
                    id="sign-in-btn-link"
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#modal-login"
                    class="sign-in-link"
                    @click="
                      addShowClass()
                      navbarToggle()
                    "
                    >Sign In / Register</a
                  >
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div v-if="show" class="outside" @click="away"></div>
  </div>
  <!-- ***** Header Area End ***** -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'loggedInUser',
      authenticated: 'isAuthenticated'
    })
  },
  methods: {
    async logout() {
      await this.$auth.logout().then(() => this.$router.push('/'))
      this.$swal({
        icon: 'success',
        title: 'Logged out!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      })
    },
    away() {
      document.getElementById('navbar-toggle').click()
    },
    showMethod() {
      const el = document.getElementById('dorneNav')
      if (el.classList.contains('show')) {
        this.show = false
      } else {
        this.show = true
      }
    },
    addShowClass() {
      const x = document.getElementById('modal-login')
      x.classList.add('show')
      x.classList.add('show')
      x.addEventListener('click', (event) => {
        x.classList.add('show')
        x.classList.add('show')
        x.classList.add('show')
        x.classList.add('show')
      })
      x.addEventListener('keypress', (event) => {
        x.classList.add('show')
        x.classList.add('show')
        x.classList.add('show')
        x.classList.add('show')
      })
    },
    navbarToggle() {
      const element = document.getElementById('dorneNav')
      const elToggle = document.getElementById('toggle-icn')

      if (
        element.classList.contains('show') &&
        window.getComputedStyle(elToggle, ':before')
      ) {
        document.getElementById('navbar-toggle').click()
      }
    }
  }
}
</script>

<style scoped>
.sign-in-link {
  color: #67a6c9;
  text-decoration: none;
  font-size: 18px !important;
}

a:hover {
  color: #0348f8;
  text-decoration: none;
}

.nav-link {
  font-size: 18px !important;
}

.dropdown-item {
  font-size: 17px !important;
  font-weight: 400;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
}
@media (min-width: 0px) {
  .animate {
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }
  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
}
</style>
