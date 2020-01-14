import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fba81f80 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _a5bb9402 = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _50d90520 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _2d1397ea = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _cfa7238e = () => interopDefault(import('../pages/warn/index.vue' /* webpackChunkName: "pages/warn/index" */))
const _44e00f52 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company",
    component: _fba81f80,
    name: "company"
  }, {
    path: "/guide",
    component: _a5bb9402,
    name: "guide"
  }, {
    path: "/judged",
    component: _50d90520,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _2d1397ea,
    name: "oetitioners"
  }, {
    path: "/warn",
    component: _cfa7238e,
    name: "warn"
  }, {
    path: "/",
    component: _44e00f52,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
