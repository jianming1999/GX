/**
 *
 * 菜单状态管理
 *
 * */
const state = {
  curTitle: '', // 当前标题
  curMenuUrl: '' // 当前路由名
}

// getters
const getters = {}

// 处理方法
const actions = {
  getItemBase ({ commit }, obj) {
    commit('setItemBase', obj)
  }
}

// mutations
const mutations = {
  setItemBase (state, obj) {
    if (obj.curTitle) {
      state.curTitle = obj.curTitle
    }
    if (obj.curMenuUrl) {
      state.curMenuUrl = obj.curMenuUrl
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
