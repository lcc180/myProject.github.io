// vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '刘灿城',
      mobile: '13622335236',
      sex: 'male',
      birth: '1990-08-06',
      balance: 267488.97
    }
  },
  mutations: {
    updateUserInfo (state, info) {
      state.userInfo = info
    },
    updateUserInfoSingle (state, key, value) {
      state.userInfo[key] = value
    }
  },
  actions: {
    updateUserInfo ({ commit, state }, info) {
      commit('updateUserInfo', info)
    }
  },
  getters: {
    balance: state => {
      return '$' + Math.floor(state.userInfo.balance)
    }
  }
})

export default store
