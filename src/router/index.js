import Vue from 'vue';
import VueRouter from 'vue-router';

const layout = () => import(/* webpackChunkName: "student-msg" */ '@/layout');
const login = () => import(/* webpackChunkName: "student-msg" */ '@/views/login');
const error = () => import(/* webpackChunkName: "student-msg" */ '@/views/error');
const student = () => import(/* webpackChunkName: "student-msg" */ '@/views/student');
const graphical = () => import(/* webpackChunkName: "student-msg" */ '@/views/graphical');
const control = () => import(/* webpackChunkName: "student-msg" */ '@/views/control');

Vue.use(VueRouter);

let prefix = ''

// 判断是 qiankun 环境则增加路由前缀
if(window.__POWERED_BY_QIANKUN__){
  prefix = '/83205271'
}

export const constantRouterMap = [
  {
    path: prefix + '/student',
    name: 'student',
    component: student,
    meta: { title: '学员管理', icon: 'el-icon-s-custom', auth: 'student-hash' }
  },
  {
    path: prefix + '/graphical',
    name: 'graphical',
    component: graphical,
    meta: { title: '图形分析', icon: 'el-icon-share', auth: 'graphical-hash' }
  },
  {
    path: '/control',
    name: 'control',
    component: control,
    meta: { title: '权限控制', icon: 'el-icon-s-help', auth: 'control-hash' }
  },
  {
    path: '/sub',
    name: 'sub',
    component: control,
    meta: { title: '第二子项', icon: 'el-icon-s-data', auth: 'control-sub' }
  },
  {
    path: '/main/home',
    name: 'main',
    meta: { title: '其他系统' }
  },
  {
    path: '/vue/about',
    name: 'about',
    meta: { title: 'Sub 其他系统' }
  }
];

const Router = new VueRouter({
  // base: window.__POWERED_BY_QIANKUN__ ? '/new' : process.env.BASE_URL,
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/student',
      children: constantRouterMap
    },
    {
      path: '*',
      name: '404',
      component: error,
      hidden: true
    }
  ]
});

export default Router;
