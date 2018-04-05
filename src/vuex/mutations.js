// vuex mutations

export default {
  updateUserInfo (state, info) {
    state.userInfo = info
  },
  updateUserInfoSingle (state, payload) {
    state.userInfo[payload.key] = payload.value
  }
}
