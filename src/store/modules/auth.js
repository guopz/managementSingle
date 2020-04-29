import { DATA_LIST_INIT } from '../mutationTypes/auth';
import * as ApiAuth from '@/api/global/auth';
const auth = {
  namespaced: true,
  state: {
    userAuths: {},
    userAuthsReady: false
  },
  getters: {
    getUserAuths(state) {
      return state.userAuths;
    }
  },
  mutations: {
    [DATA_LIST_INIT](state, params) {
      state.userAuths = params;
      state.userAuthsReady = true;
    }
  },
  actions: {
    async getAuth({ commit }, params) {
      let result = await ApiAuth.getAuth(params);
      commit('DATA_LIST_INIT', result);
      return result;
    }
  }
}

export default auth;
