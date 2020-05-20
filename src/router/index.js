import Vue from 'vue';
import VueRouter from 'vue-router';

const layout = () => import('@/layout');
const login = () => import('@/views/login');
const error = () => import('@/views/error');
const student = () => import('@/views/student');
const graphical = () => import('@/views/graphical');
const control = () => import('@/views/control');

Vue.use(VueRouter);

const constantRouterMap = [
  {
    path: '/student',
    name: 'student',
    component: student,
    meta: { title: '学员管理', icon: 'el-icon-s-custom', auth: 'student-hash' }
  },
  {
    path: '/graphical',
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
  }
];

const Router = new VueRouter({
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
