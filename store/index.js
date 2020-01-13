import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      base
    }
  })
}
export default store