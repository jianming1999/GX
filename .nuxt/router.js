import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71873eae = () => interopDefault(import('../pages/accountList/index.vue' /* webpackChunkName: "pages/accountList/index" */))
const _71148702 = () => interopDefault(import('../pages/comList/index.vue' /* webpackChunkName: "pages/comList/index" */))
const _fba81f80 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _a5bb9402 = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _b35ca768 = () => interopDefault(import('../pages/hotBottom1/index.vue' /* webpackChunkName: "pages/hotBottom1/index" */))
const _8f2108a0 = () => interopDefault(import('../pages/hotLeft1/index.vue' /* webpackChunkName: "pages/hotLeft1/index" */))
const _4d542e71 = () => interopDefault(import('../pages/hotLeft2/index.vue' /* webpackChunkName: "pages/hotLeft2/index" */))
const _3b8e3d9c = () => interopDefault(import('../pages/hotLeft3/index.vue' /* webpackChunkName: "pages/hotLeft3/index" */))
const _089f22f4 = () => interopDefault(import('../pages/hotRight2/index.vue' /* webpackChunkName: "pages/hotRight2/index" */))
const _ded5bd72 = () => interopDefault(import('../pages/hotRight3/index.vue' /* webpackChunkName: "pages/hotRight3/index" */))
const _50d90520 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _2d1397ea = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _324f6168 = () => interopDefault(import('../pages/visitList/index.vue' /* webpackChunkName: "pages/visitList/index" */))
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
    path: "/accountList",
    component: _71873eae,
    name: "accountList"
  }, {
    path: "/comList",
    component: _71148702,
    name: "comList"
  }, {
    path: "/company",
    component: _fba81f80,
    name: "company"
  }, {
    path: "/guide",
    component: _a5bb9402,
    name: "guide"
  }, {
    path: "/hotBottom1",
    component: _b35ca768,
    name: "hotBottom1"
  }, {
    path: "/hotLeft1",
    component: _8f2108a0,
    name: "hotLeft1"
  }, {
    path: "/hotLeft2",
    component: _4d542e71,
    name: "hotLeft2"
  }, {
    path: "/hotLeft3",
    component: _3b8e3d9c,
    name: "hotLeft3"
  }, {
    path: "/hotRight2",
    component: _089f22f4,
    name: "hotRight2"
  }, {
    path: "/hotRight3",
    component: _ded5bd72,
    name: "hotRight3"
  }, {
    path: "/judged",
    component: _50d90520,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _2d1397ea,
    name: "oetitioners"
  }, {
    path: "/visitList",
    component: _324f6168,
    name: "visitList"
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
