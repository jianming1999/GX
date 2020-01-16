import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _226bba1b = () => interopDefault(import('../pages/accountList/index.vue' /* webpackChunkName: "pages/accountList/index" */))
const _6f9c7e22 = () => interopDefault(import('../pages/comList/index.vue' /* webpackChunkName: "pages/comList/index" */))
const _4d6daba6 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _d7a1f1a8 = () => interopDefault(import('../pages/guide/index.vue' /* webpackChunkName: "pages/guide/index" */))
const _38698f3f = () => interopDefault(import('../pages/hotBottom1/index.vue' /* webpackChunkName: "pages/hotBottom1/index" */))
const _44f97f63 = () => interopDefault(import('../pages/hotLeft1/index.vue' /* webpackChunkName: "pages/hotLeft1/index" */))
const _4c439bb8 = () => interopDefault(import('../pages/hotLeft2/index.vue' /* webpackChunkName: "pages/hotLeft2/index" */))
const _6ec2e4e5 = () => interopDefault(import('../pages/hotLeft3/index.vue' /* webpackChunkName: "pages/hotLeft3/index" */))
const _0066e133 = () => interopDefault(import('../pages/hotRight2/index.vue' /* webpackChunkName: "pages/hotRight2/index" */))
const _d568d818 = () => interopDefault(import('../pages/hotRight3/index.vue' /* webpackChunkName: "pages/hotRight3/index" */))
const _4b665993 = () => interopDefault(import('../pages/judged/index.vue' /* webpackChunkName: "pages/judged/index" */))
const _440fd952 = () => interopDefault(import('../pages/oetitioners/index.vue' /* webpackChunkName: "pages/oetitioners/index" */))
const _28e27c0e = () => interopDefault(import('../pages/visitList/index.vue' /* webpackChunkName: "pages/visitList/index" */))
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
    path: "/comList",
    component: _6f9c7e22,
    name: "comList"
  }, {
    path: "/company",
    component: _4d6daba6,
    name: "company"
  }, {
    path: "/guide",
    component: _d7a1f1a8,
    name: "guide"
  }, {
    path: "/hotBottom1",
    component: _38698f3f,
    name: "hotBottom1"
  }, {
    path: "/hotLeft1",
    component: _44f97f63,
    name: "hotLeft1"
  }, {
    path: "/hotLeft2",
    component: _4c439bb8,
    name: "hotLeft2"
  }, {
    path: "/hotLeft3",
    component: _6ec2e4e5,
    name: "hotLeft3"
  }, {
    path: "/hotRight2",
    component: _0066e133,
    name: "hotRight2"
  }, {
    path: "/hotRight3",
    component: _d568d818,
    name: "hotRight3"
  }, {
    path: "/judged",
    component: _4b665993,
    name: "judged"
  }, {
    path: "/oetitioners",
    component: _440fd952,
    name: "oetitioners"
  }, {
    path: "/visitList",
    component: _28e27c0e,
    name: "visitList"
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
