// vuex
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/vuex/mutations'
import getters from '@/vuex/getters'
import actions from '@/vuex/actions'
import store2 from 'store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: store2.get('userInfo')
  },
  mutations,
  actions,
  getters
})

export default store
