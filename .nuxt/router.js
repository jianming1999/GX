import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _787fc219 = () => interopDefault(import('../pages/accountList/index.vue' /* webpackChunkName: "pages/accountList/index" */))
const _462ce12b = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _281f34ac = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _285e6a56 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _340c1b55 = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _1e541d2e = () => interopDefault(import('../pages/warn/index.vue' /* webpackChunkName: "pages/warn/index" */))
const _074a1b3d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/gx/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accountList",
    component: _787fc219,
    name: "accountList"
  }, {
    path: "/company",
    component: _462ce12b,
    name: "company"
  }, {
    path: "/guide",
    component: _281f34ac,
    name: "guide"
  }, {
    path: "/judged",
    component: _285e6a56,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _340c1b55,
    name: "oetitioners"
  }, {
    path: "/warn",
    component: _1e541d2e,
    name: "warn"
  }, {
    path: "/",
    component: _074a1b3d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
