import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e753502 = () => interopDefault(import('../pages/accountList/index.vue' /* webpackChunkName: "pages/accountList/index" */))
const _2b9a3094 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _680c7b53 = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _19912b68 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _0bfce384 = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _920ba336 = () => interopDefault(import('../pages/warn/index.vue' /* webpackChunkName: "pages/warn/index" */))
const _0e2438b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/gx/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accountList",
    component: _3e753502,
    name: "accountList"
  }, {
    path: "/company",
    component: _2b9a3094,
    name: "company"
  }, {
    path: "/guide",
    component: _680c7b53,
    name: "guide"
  }, {
    path: "/judged",
    component: _19912b68,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _0bfce384,
    name: "oetitioners"
  }, {
    path: "/warn",
    component: _920ba336,
    name: "warn"
  }, {
    path: "/",
    component: _0e2438b4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
