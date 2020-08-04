<template>
  <div>
    <header id="header" class="header_area border-0">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 h-100">
            <nav class="h-100 navbar navbar-expand-lg">
              <nuxt-link to="/" class="navbar-brand" tag="a">
                <img
                  src="/images/logo.png"
                  width="110"
                  height="110"
                  alt="logo-ceo-gmbh"
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
              >
                <span id="toggle-icn" class="fa fa-bars text-secondary"></span>
              </button>
              <!-- Nav -->
              <div id="dorneNav" class="collapse navbar-collapse bg-white">
                <ul id="dorneMenu" class="navbar-nav mr-auto">
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
                      class="dropdown-menu border-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/tickets"
                          >Ticketing</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/travelpack"
                          >Tour Packages</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/services"
                          >Photography Exploration</nuxt-link
                        >
                      </div>
                      <div @click="navbarToggle">
                        <nuxt-link class="dropdown-item" to="/custom-tour"
                          >Customize Tour</nuxt-link
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
                      class="dropdown-menu border-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="#">Contact</a>
                      <a class="dropdown-item" href="#">Gallery</a>
                      <a class="dropdown-item" href="#">Testimony</a>
                    </div>
                  </li>
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
                      Customer Section
                    </a>
                    <div
                      class="dropdown-menu border-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <div @click="navbarToggle">
                        <nuxtLink
                          to="/transactions"
                          class="dropdown-item"
                          tag="a"
                          >Transactions</nuxtLink
                        >
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Signin btn -->
                <div class="ceo-gmbh-signin-btn">
                  <a
                    v-if="!authenticated"
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
                  <div v-else>
                    <a class="mx-2">Welcome, {{ user.email }}</a>
                    <a
                      href="javascript:void(0);"
                      class=""
                      @click="
                        logout()
                        navbarToggle()
                      "
                      >Logout</a
                    >
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <modal-login />
  </div>
  <!-- ***** Header Area End ***** -->
</template>

<script>
import { mapGetters } from 'vuex'
import ModalLogin from '@/components/index/ModalLogin'
export default {
  name: 'Navbar',
  components: {
    ModalLogin
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
}

a:hover {
  color: #8eadbe;
  text-decoration: none;
}
</style>
