import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _226bba1b = () => interopDefault(import('../pages/accountList/index.vue' /* webpackChunkName: "pages/accountList/index" */))
const _4d6daba6 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _d7a1f1a8 = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _4b665993 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _440fd952 = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _f24b7928 = () => interopDefault(import('../pages/warn/index.vue' /* webpackChunkName: "pages/warn/index" */))
const _350ef382 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/gx/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accountList",
    component: _226bba1b,
    name: "accountList"
  }, {
    path: "/company",
    component: _4d6daba6,
    name: "company"
  }, {
    path: "/guide",
    component: _d7a1f1a8,
    name: "guide"
  }, {
    path: "/judged",
    component: _4b665993,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _440fd952,
    name: "oetitioners"
  }, {
    path: "/warn",
    component: _f24b7928,
    name: "warn"
  }, {
    path: "/",
    component: _350ef382,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
