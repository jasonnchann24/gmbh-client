import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _876036b2 = () => interopDefault(import('..\\pages\\brava.vue' /* webpackChunkName: "pages_brava" */))
const _fde83afa = () => interopDefault(import('..\\pages\\custom-tour\\index.vue' /* webpackChunkName: "pages_custom-tour_index" */))
const _cbd298a0 = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages_packages_index" */))
const _92747a38 = () => interopDefault(import('..\\pages\\photography-exploration\\index.vue' /* webpackChunkName: "pages_photography-exploration_index" */))
const _56ced383 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages_services" */))
const _6eeac661 = () => interopDefault(import('..\\pages\\ticketing\\index.vue' /* webpackChunkName: "pages_ticketing_index" */))
const _73f26e5c = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages_tickets" */))
const _a399e670 = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages_transactions_index" */))
const _50d434d0 = () => interopDefault(import('..\\pages\\travelpack.vue' /* webpackChunkName: "pages_travelpack" */))
const _5c29d62d = () => interopDefault(import('..\\pages\\about-us\\contact.vue' /* webpackChunkName: "pages_about-us_contact" */))
const _4cc37f42 = () => interopDefault(import('..\\pages\\about-us\\gallery.vue' /* webpackChunkName: "pages_about-us_gallery" */))
const _fe10075e = () => interopDefault(import('..\\pages\\about-us\\testimony.vue' /* webpackChunkName: "pages_about-us_testimony" */))
const _09f5fd52 = () => interopDefault(import('..\\pages\\transactions\\_id\\index.vue' /* webpackChunkName: "pages_transactions__id_index" */))
const _7d2e7349 = () => interopDefault(import('..\\pages\\transactions\\_id\\passengers.vue' /* webpackChunkName: "pages_transactions__id_passengers" */))
const _2930d683 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\index.vue' /* webpackChunkName: "pages_packages__id__package_index" */))
const _55b79470 = () => interopDefault(import('..\\pages\\packages\\_id\\_package\\book.vue' /* webpackChunkName: "pages_packages__id__package_book" */))
const _a4c2b406 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/brava",
    component: _876036b2,
    name: "brava"
  }, {
    path: "/custom-tour",
    component: _fde83afa,
    name: "custom-tour"
  }, {
    path: "/packages",
    component: _cbd298a0,
    name: "packages"
  }, {
    path: "/photography-exploration",
    component: _92747a38,
    name: "photography-exploration"
  }, {
    path: "/services",
    component: _56ced383,
    name: "services"
  }, {
    path: "/ticketing",
    component: _6eeac661,
    name: "ticketing"
  }, {
    path: "/tickets",
    component: _73f26e5c,
    name: "tickets"
  }, {
    path: "/transactions",
    component: _a399e670,
    name: "transactions"
  }, {
    path: "/travelpack",
    component: _50d434d0,
    name: "travelpack"
  }, {
    path: "/about-us/contact",
    component: _5c29d62d,
    name: "about-us-contact"
  }, {
    path: "/about-us/gallery",
    component: _4cc37f42,
    name: "about-us-gallery"
  }, {
    path: "/about-us/testimony",
    component: _fe10075e,
    name: "about-us-testimony"
  }, {
    path: "/transactions/:id",
    component: _09f5fd52,
    name: "transactions-id"
  }, {
    path: "/transactions/:id/passengers",
    component: _7d2e7349,
    name: "transactions-id-passengers"
  }, {
    path: "/packages/:id/:package?",
    component: _2930d683,
    name: "packages-id-package"
  }, {
    path: "/packages/:id/:package?/book",
    component: _55b79470,
    name: "packages-id-package-book"
  }, {
    path: "/",
    component: _a4c2b406,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
