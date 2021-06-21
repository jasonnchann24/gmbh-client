import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_vuescrollto_1f1b7b08 from 'nuxt_plugin_vuescrollto_1f1b7b08' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_vuesweetalert2_54c8a778 from 'nuxt_plugin_vuesweetalert2_54c8a778' // Source: .\\vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_axios_7ceb8eed from 'nuxt_plugin_axios_7ceb8eed' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_carousel_2496c93e from 'nuxt_plugin_carousel_2496c93e' // Source: ..\\plugins\\carousel.js (mode: 'client')
import nuxt_plugin_contentPlaceholder_fe334272 from 'nuxt_plugin_contentPlaceholder_fe334272' // Source: ..\\plugins\\contentPlaceholder.js (mode: 'client')
import nuxt_plugin_vuemoment_732aa8ba from 'nuxt_plugin_vuemoment_732aa8ba' // Source: ..\\plugins\\vue-moment.js (mode: 'client')
import nuxt_plugin_vueagile_726cdbff from 'nuxt_plugin_vueagile_726cdbff' // Source: ..\\plugins\\vue-agile (mode: 'client')
import nuxt_plugin_auth_100408a3 from 'nuxt_plugin_auth_100408a3' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"CEO Trade & Travel GmbH","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"\u002Fstyle.css","type":"text\u002Fcss"},{"rel":"stylesheet","href":"\u002Fcss\u002Fresponsive\u002Fresponsive.css","type":"text\u002Fcss"},{"rel":"stylesheet","href":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.5.1\u002Fcss\u002Fbootstrap.min.css","type":"text\u002Fcss","integrity":"sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww\u002FaWY76TfkUoSX","crossorigin":"anonymous"},{"rel":"stylesheet","href":"\u002FinfinitePagination\u002Fcss\u002Fstyle.css","type":"text\u002Fcss"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fanimate.css\u002F4.0.0\u002Fanimate.min.css","type":"text\u002Fcss"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fsite.webmanifest"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#5bbad5"},{"name":"msapplication-TileColor","content":"#2b5797"},{"name":"theme-color","content":"#ffffff"}],"script":[{"src":"\u002Fjs\u002Fjquery\u002Fjquery-2.2.4.min.js","body":true},{"src":"\u002Fjs\u002Fbootstrap\u002Fpopper.min.js","body":true},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.5.2\u002Fjs\u002Fbootstrap.min.js","body":true},{"src":"\u002Fjs\u002Fothers\u002Fplugins.js","body":true},{"src":"\u002Fjs\u002Factive.js","body":true},{"src":"\u002FinfinitePagination\u002Fjs\u002Findex.js","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_1f1b7b08 === 'function') {
    await nuxt_plugin_vuescrollto_1f1b7b08(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_54c8a778 === 'function') {
    await nuxt_plugin_vuesweetalert2_54c8a778(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7ceb8eed === 'function') {
    await nuxt_plugin_axios_7ceb8eed(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_carousel_2496c93e === 'function') {
    await nuxt_plugin_carousel_2496c93e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_contentPlaceholder_fe334272 === 'function') {
    await nuxt_plugin_contentPlaceholder_fe334272(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuemoment_732aa8ba === 'function') {
    await nuxt_plugin_vuemoment_732aa8ba(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueagile_726cdbff === 'function') {
    await nuxt_plugin_vueagile_726cdbff(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_100408a3 === 'function') {
    await nuxt_plugin_auth_100408a3(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
