import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (!getToken()) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login`);
    }
    NProgress.done();
  } else if (to.path === '/login') {
    next({ path: '/' });
    NProgress.done();
  } else {
    if (!store.state.auth.userAuthsReady) {
      let id = store.state.user.userinfo.id;
      store.dispatch('auth/getAuth', { id })
        .then(() => {
          judgeCanApproach(to, next);
        })
        .catch(err => {
          console.log('获取权限列表失败 ==>', err);
          next({ path: '/404' });
          NProgress.done();
        });
    } else {
      judgeCanApproach(to, next);
    }
  }
});

const judgeCanApproach = (to, next) => {
  console.log(!store.state.auth.needAuthRouter);
  if (!store.state.auth.needAuthRouter) {
    next();
  } else if (
    (to.meta.auth && store.state.auth.userAuths[to.meta.auth]) ||
    !to.meta.auth
  ) {
    next();
  } else {
    console.log('检测到没有权限的路由 ==>', to);
    //TODO 没有权限路由应跳转到403页面,后续增加
    next({ path: '/404' });
  }
};

router.afterEach(() => {
  NProgress.done();
});
