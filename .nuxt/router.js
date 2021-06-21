import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6449b7a7 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _4a93e4b7 = () => interopDefault(import('..\\pages\\custom-tour\\index.vue' /* webpackChunkName: "pages_custom-tour_index" */))
const _4cd60408 = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages_packages_index" */))
const _260fd1d0 = () => interopDefault(import('..\\pages\\photography-exploration\\index.vue' /* webpackChunkName: "pages_photography-exploration_index" */))
const _77361906 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages_settings_index" */))
const _1f35c595 = () => interopDefault(import('..\\pages\\ticketing\\index.vue' /* webpackChunkName: "pages_ticketing_index" */))
const _15ab5114 = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages_transactions_index" */))
const _16ed3f9c = () => interopDefault(import('..\\pages\\about-us\\company-profile.vue' /* webpackChunkName: "pages_about-us_company-profile" */))
const _9582850e = () => interopDefault(import('..\\pages\\about-us\\contact.vue' /* webpackChunkName: "pages_about-us_contact" */))
const _32b327ab = () => interopDefault(import('..\\pages\\about-us\\gallery.vue' /* webpackChunkName: "pages_about-us_gallery" */))
const _2f1f7ec6 = () => interopDefault(import('..\\pages\\about-us\\testimony.vue' /* webpackChunkName: "pages_about-us_testimony" */))
const _a128b7a0 = () => interopDefault(import('..\\pages\\others\\brava.vue' /* webpackChunkName: "pages_others_brava" */))
const _20e4fb5a = () => interopDefault(import('..\\pages\\others\\services.vue' /* webpackChunkName: "pages_others_services" */))
const _6130ca1b = () => interopDefault(import('..\\pages\\others\\tickets.vue' /* webpackChunkName: "pages_others_tickets" */))
const _74c173af = () => interopDefault(import('..\\pages\\others\\travelpack.vue' /* webpackChunkName: "pages_others_travelpack" */))
const _18b88886 = () => interopDefault(import('..\\pages\\transactions\\_id\\index.vue' /* webpackChunkName: "pages_transactions__id_index" */))
const _3bf26ed6 = () => interopDefault(import('..\\pages\\transactions\\_id\\passengers.vue' /* webpackChunkName: "pages_transactions__id_passengers" */))
const _444ba48b = () => interopDefault(import('..\\pages\\blog\\_id\\_slug.vue' /* webpackChunkName: "pages_blog__id__slug" */))
const _5f632ab7 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\index.vue' /* webpackChunkName: "pages_packages__id__package_index" */))
const _39fc8b14 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\book.vue' /* webpackChunkName: "pages_packages__id__package_book" */))
const _d889c16e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/blog",
    component: _6449b7a7,
    name: "blog"
  }, {
    path: "/custom-tour",
    component: _4a93e4b7,
    name: "custom-tour"
  }, {
    path: "/packages",
    component: _4cd60408,
    name: "packages"
  }, {
    path: "/photography-exploration",
    component: _260fd1d0,
    name: "photography-exploration"
  }, {
    path: "/settings",
    component: _77361906,
    name: "settings"
  }, {
    path: "/ticketing",
    component: _1f35c595,
    name: "ticketing"
  }, {
    path: "/transactions",
    component: _15ab5114,
    name: "transactions"
  }, {
    path: "/about-us/company-profile",
    component: _16ed3f9c,
    name: "about-us-company-profile"
  }, {
    path: "/about-us/contact",
    component: _9582850e,
    name: "about-us-contact"
  }, {
    path: "/about-us/gallery",
    component: _32b327ab,
    name: "about-us-gallery"
  }, {
    path: "/about-us/testimony",
    component: _2f1f7ec6,
    name: "about-us-testimony"
  }, {
    path: "/others/brava",
    component: _a128b7a0,
    name: "others-brava"
  }, {
    path: "/others/services",
    component: _20e4fb5a,
    name: "others-services"
  }, {
    path: "/others/tickets",
    component: _6130ca1b,
    name: "others-tickets"
  }, {
    path: "/others/travelpack",
    component: _74c173af,
    name: "others-travelpack"
  }, {
    path: "/transactions/:id",
    component: _18b88886,
    name: "transactions-id"
  }, {
    path: "/transactions/:id/passengers",
    component: _3bf26ed6,
    name: "transactions-id-passengers"
  }, {
    path: "/blog/:id/:slug?",
    component: _444ba48b,
    name: "blog-id-slug"
  }, {
    path: "/packages/:id/:package?",
    component: _5f632ab7,
    name: "packages-id-package"
  }, {
    path: "/packages/:id/:package?/book",
    component: _39fc8b14,
    name: "packages-id-package-book"
  }, {
    path: "/",
    component: _d889c16e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
