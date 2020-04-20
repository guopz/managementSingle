import Vue from 'vue';
import VueRouter from 'vue-router';

// const HelloWorld = () => import('@/components/HelloWorld');
const layout = () => import('@/layout');
const student = () => import('../views/student');

Vue.use(VueRouter);

const constantRouterMap = [
  {
    path: '/student',
    name: 'student',
    component: student,
    meta: { title: '学员管理', icon: 'el-icon-s-custom' }
  }
];

export default new VueRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/student',
      children: constantRouterMap
    }
  ]
});
