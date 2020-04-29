import Vue from 'vue';
import Vuex from 'vuex';
import student from './modules/student';
import user from './modules/user';
import auth from './modules/auth';
import gloabl from './modules/gloabl';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    student,
    user,
    auth,
    gloabl
  }
})
