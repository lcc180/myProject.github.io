// vuex mutations

export default {
  userInfo: state => {
    return state.userInfo
  },
  balance: state => {
    return '$' + Math.floor(state.userInfo.balance)
  }
}
