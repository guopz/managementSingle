const gloabl = {
  namespaced: true,
  state: {
    sideFlag: false
  },
  getters: {
    getUserAuths(state) {
      return state.userAuths;
    }
  },
  mutations: {
    updataSide(state, params) {
      state.sideFlag = !state.sideFlag
    }
  }
}

export default gloabl;
