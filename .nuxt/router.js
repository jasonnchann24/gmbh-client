import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fde83afa = () => interopDefault(import('..\\pages\\custom-tour\\index.vue' /* webpackChunkName: "pages_custom-tour_index" */))
const _a4c2b406 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _cbd298a0 = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages_packages_index" */))
const _92747a38 = () => interopDefault(import('..\\pages\\photography-exploration\\index.vue' /* webpackChunkName: "pages_photography-exploration_index" */))
const _37b7ceba = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages_settings_index" */))
const _6eeac661 = () => interopDefault(import('..\\pages\\ticketing\\index.vue' /* webpackChunkName: "pages_ticketing_index" */))
const _a399e670 = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages_transactions_index" */))
const _2afa84e6 = () => interopDefault(import('..\\pages\\about-us\\company-profile.vue' /* webpackChunkName: "pages_about-us_company-profile" */))
const _5c29d62d = () => interopDefault(import('..\\pages\\about-us\\contact.vue' /* webpackChunkName: "pages_about-us_contact" */))
const _4cc37f42 = () => interopDefault(import('..\\pages\\about-us\\gallery.vue' /* webpackChunkName: "pages_about-us_gallery" */))
const _fe10075e = () => interopDefault(import('..\\pages\\about-us\\testimony.vue' /* webpackChunkName: "pages_about-us_testimony" */))
const _488736e4 = () => interopDefault(import('..\\pages\\others\\brava.vue' /* webpackChunkName: "pages_others_brava" */))
const _7099fc26 = () => interopDefault(import('..\\pages\\others\\services.vue' /* webpackChunkName: "pages_others_services" */))
const _21b27fcf = () => interopDefault(import('..\\pages\\others\\tickets.vue' /* webpackChunkName: "pages_others_tickets" */))
const _a98d1d0a = () => interopDefault(import('..\\pages\\others\\travelpack.vue' /* webpackChunkName: "pages_others_travelpack" */))
const _09f5fd52 = () => interopDefault(import('..\\pages\\transactions\\_id\\index.vue' /* webpackChunkName: "pages_transactions__id_index" */))
const _7d2e7349 = () => interopDefault(import('..\\pages\\transactions\\_id\\passengers.vue' /* webpackChunkName: "pages_transactions__id_passengers" */))
const _2930d683 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\index.vue' /* webpackChunkName: "pages_packages__id__package_index" */))
const _55b79470 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\book.vue' /* webpackChunkName: "pages_packages__id__package_book" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/custom-tour",
    component: _fde83afa,
    name: "custom-tour___en"
  }, {
    path: "/id",
    component: _a4c2b406,
    name: "index___id"
  }, {
    path: "/packages",
    component: _cbd298a0,
    name: "packages___en"
  }, {
    path: "/photography-exploration",
    component: _92747a38,
    name: "photography-exploration___en"
  }, {
    path: "/settings",
    component: _37b7ceba,
    name: "settings___en"
  }, {
    path: "/ticketing",
    component: _6eeac661,
    name: "ticketing___en"
  }, {
    path: "/transactions",
    component: _a399e670,
    name: "transactions___en"
  }, {
    path: "/about-us/company-profile",
    component: _2afa84e6,
    name: "about-us-company-profile___en"
  }, {
    path: "/about-us/contact",
    component: _5c29d62d,
    name: "about-us-contact___en"
  }, {
    path: "/about-us/gallery",
    component: _4cc37f42,
    name: "about-us-gallery___en"
  }, {
    path: "/about-us/testimony",
    component: _fe10075e,
    name: "about-us-testimony___en"
  }, {
    path: "/id/custom-tour",
    component: _fde83afa,
    name: "custom-tour___id"
  }, {
    path: "/id/packages",
    component: _cbd298a0,
    name: "packages___id"
  }, {
    path: "/id/photography-exploration",
    component: _92747a38,
    name: "photography-exploration___id"
  }, {
    path: "/id/settings",
    component: _37b7ceba,
    name: "settings___id"
  }, {
    path: "/id/ticketing",
    component: _6eeac661,
    name: "ticketing___id"
  }, {
    path: "/id/transactions",
    component: _a399e670,
    name: "transactions___id"
  }, {
    path: "/others/brava",
    component: _488736e4,
    name: "others-brava___en"
  }, {
    path: "/others/services",
    component: _7099fc26,
    name: "others-services___en"
  }, {
    path: "/others/tickets",
    component: _21b27fcf,
    name: "others-tickets___en"
  }, {
    path: "/others/travelpack",
    component: _a98d1d0a,
    name: "others-travelpack___en"
  }, {
    path: "/id/about-us/company-profile",
    component: _2afa84e6,
    name: "about-us-company-profile___id"
  }, {
    path: "/id/about-us/contact",
    component: _5c29d62d,
    name: "about-us-contact___id"
  }, {
    path: "/id/about-us/gallery",
    component: _4cc37f42,
    name: "about-us-gallery___id"
  }, {
    path: "/id/about-us/testimony",
    component: _fe10075e,
    name: "about-us-testimony___id"
  }, {
    path: "/id/others/brava",
    component: _488736e4,
    name: "others-brava___id"
  }, {
    path: "/id/others/services",
    component: _7099fc26,
    name: "others-services___id"
  }, {
    path: "/id/others/tickets",
    component: _21b27fcf,
    name: "others-tickets___id"
  }, {
    path: "/id/others/travelpack",
    component: _a98d1d0a,
    name: "others-travelpack___id"
  }, {
    path: "/id/transactions/:id",
    component: _09f5fd52,
    name: "transactions-id___id"
  }, {
    path: "/id/transactions/:id/passengers",
    component: _7d2e7349,
    name: "transactions-id-passengers___id"
  }, {
    path: "/id/packages/:id/:package?",
    component: _2930d683,
    name: "packages-id-package___id"
  }, {
    path: "/id/packages/:id/:package?/book",
    component: _55b79470,
    name: "packages-id-package-book___id"
  }, {
    path: "/transactions/:id",
    component: _09f5fd52,
    name: "transactions-id___en"
  }, {
    path: "/transactions/:id/passengers",
    component: _7d2e7349,
    name: "transactions-id-passengers___en"
  }, {
    path: "/packages/:id/:package?",
    component: _2930d683,
    name: "packages-id-package___en"
  }, {
    path: "/packages/:id/:package?/book",
    component: _55b79470,
    name: "packages-id-package-book___en"
  }, {
    path: "/",
    component: _a4c2b406,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
