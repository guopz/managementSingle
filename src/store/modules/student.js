import { DATA_LIST_ADD, DATA_LIST_DELETE, DATA_LIST_UPDATA, DATA_LIST_INIT, DATA_LIST_DELETEMORE } from '../mutationTypes/student';
import * as API from "@/api/student";
import _ from 'lodash';

const student = {
  namespaced: true,
  state: {
    dataList: {},
  },
  mutations: {
    [DATA_LIST_INIT](state, payload) {
      state.dataList = payload;
    },
    [DATA_LIST_ADD](state, payload) {
      let { content, totalCount } = state.dataList;
      let id = content.length + parseInt(Math.random() * 10);
      payload.id = id;
      state.dataList.totalCount = totalCount - 1;
      content.unshift(payload);
    },
    [DATA_LIST_DELETE](state, payload) {
      let { content, totalCount } = state.dataList;
      console.log('DATA_LIST_DELETE ==>', payload, state.dataList);
      let index = _.findIndex(content, function(item) { return item.id == payload.id; });
      state.dataList.totalCount = totalCount - 1;
      content.splice(index, 1);
    },
    [DATA_LIST_DELETEMORE](state, payload) {
      let { content, totalCount } = state.dataList;
      let len = payload.length;
      console.log('DATA_LIST_DELETE ==>', payload, state.dataList);

      state.dataList.content = content.filter(x => payload.every(y => y.id !== x.id));
      state.dataList.totalCount = totalCount - len;
    },
    [DATA_LIST_UPDATA](state, payload) {
      let { content } = state.dataList;
      let index = _.findIndex(content, function(item) { return item.id == payload.id; });
      content.splice(index, 1, payload);
      // console.log('初始化数据 ==>', payload, index, totalCount);
    }
  },
  actions: {
    async getStudentList({ commit }, params) {
      let result = await API.getStudentList(params);
      commit('DATA_LIST_INIT', result);
      return result;
    }
  }
}

export default student;
