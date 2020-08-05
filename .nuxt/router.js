import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _876036b2 = () => interopDefault(import('..\\pages\\brava.vue' /* webpackChunkName: "pages_brava" */))
const _fde83afa = () => interopDefault(import('..\\pages\\custom-tour\\index.vue' /* webpackChunkName: "pages_custom-tour_index" */))
const _cbd298a0 = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages_packages_index" */))
const _56ced383 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages_services" */))
const _6eeac661 = () => interopDefault(import('..\\pages\\ticketing\\index.vue' /* webpackChunkName: "pages_ticketing_index" */))
const _73f26e5c = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages_tickets" */))
const _a399e670 = () => interopDefault(import('..\\pages\\transactions\\index.vue' /* webpackChunkName: "pages_transactions_index" */))
const _50d434d0 = () => interopDefault(import('..\\pages\\travelpack.vue' /* webpackChunkName: "pages_travelpack" */))
const _d9a4bda0 = () => interopDefault(import('..\\pages\\transactions\\_id.vue' /* webpackChunkName: "pages_transactions__id" */))
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
    path: "/transactions/:id",
    component: _d9a4bda0,
    name: "transactions-id"
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
