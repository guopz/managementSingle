import { DATA_LIST_INIT } from '../mutationTypes/user';
import { setToken } from '@/utils/auth';
const user = {
  namespaced: true,
  state: {
    login: {
      name: 'admin',
      password: 'admin'
    },
    userinfo: {
      name: '张三',
      id: 1,
      mobile: '15838203428',
      email: 'aqweasd@ava.com',
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    },
    token: ""
  },
  mutations: {
    [DATA_LIST_INIT](state, params) {
      console.log(params);
      state.token = params;
    }
  },
  actions: {
    login({ state }, params) {
      let { login } = state;
      if (params.name == login.name && params.password == login.password ) {
        setToken('QWEASDZXC');
        return { code: 200, message: "success"}
      } else {
        return { code: 100, message: "账号或密码不正确"}
      }
    },
    loginOut() {
      return new Promise((resolve) => {
        sessionStorage.clear();
        resolve();
      });
    }
  }
}

export default user;
