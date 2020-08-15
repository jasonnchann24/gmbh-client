import redirectSSL from 'redirect-ssl'
require('dotenv').config()
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'CEO GmbH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/style.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: '/css/responsive/responsive.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css',
        type: 'text/css',
        integrity:
          'sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: '/infinitePagination/css/style.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
        type: 'text/css'
      }
    ],
    script: [
      { src: '/js/jquery/jquery-2.2.4.min.js', body: true },
      { src: '/js/bootstrap/popper.min.js', body: true },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        body: true
      },
      { src: '/js/others/plugins.js', body: true },
      { src: '/js/active.js', body: true },
      { src: '/infinitePagination/js/index.js', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#763ea' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/contentPlaceholder.js', mode: 'client' },
    { src: '~/plugins/vue-moment.js', mode: 'client' },
    { src: '~/plugins/vue-agile', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  axios: {
    credentials: true,
    baseURL: `${process.env.SANCTUM_URL}/api/`,
    https: process.env.HTTPS_BOOL,
    proxy: false
  },

  auth: {
    redirect: {
      home: false,
      login: '/'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.SANCTUM_URL,
        user: {
          property: 'data'
        },
        endpoints: {
          logout: { url: '/logout', method: 'post' }
        }
      }
    }
  },

  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    })
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
