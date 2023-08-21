import './public-path';
import 'normalize.css/normalize.css'
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router, { constantRouterMap } from './router';
import store from './store';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import '@/utils/auth/permission';
import inject from './utils/auth/inject';
import Ye from '@/components';
import '@/styles/index.scss';
import '@/directives';
import eventBus from '@/config/eventBus';

// import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
// let { registerMicroApps, setDefaultMountApp, start } = require('qiankun');

Vue.use(ElementUI, { locale });
Vue.use(Ye, { locale });
Vue.config.productionTip = false;
Vue.prototype.$eventBus = eventBus;

// 权限控制开关
inject(false);

// const vm = new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app');

// window.$vm = vm;

let routerTemp = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  const __POWERED_BY_QIANKUN__ = window.__POWERED_BY_QIANKUN__;
  const cachedInstance = window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__;
  console.log('__POWERED_BY_QIANKUN__ ==>', __POWERED_BY_QIANKUN__);
  console.log('cachedInstance ==>', cachedInstance);

  if (__POWERED_BY_QIANKUN__) {

    routerTemp = new VueRouter({
      routes: constantRouterMap
    });

    const cachedNode = cachedInstance && cachedInstance._vnode;

    // 让当前路由在最初的Vue实例上可用
    cachedInstance && routerTemp.apps.push(...cachedInstance.catchRoute.apps);

    instance = new Vue({
      router: routerTemp,
      store,
      render: h => cachedNode ? cachedNode : h(App),
    })

    // 缓存最初的Vue实例
    instance.cachedInstance = cachedInstance;

    cachedInstance && routerTemp.onReady(() => {
      const { path } = routerTemp.currentRoute;
      const { path: oldPath } = cachedInstance.$router.currentRoute;
      // 当前路由和上一次卸载时不一致，则切换至新路由
      if (path !== oldPath) {
        cachedInstance.$router.push(path);
      }
    });

    console.log('cachedInstance ==>', cachedInstance);

    instance.$mount('#app1');

  } else {
    routerTemp = router;
    instance = new Vue({
      router: routerTemp,
      store,
      render: h => h(App),
    }).$mount(container ? container.querySelector('#app1') : '#app1');
  }

  // instance = new Vue({
  //   router: routerTemp,
  //   store,
  //   render: h => h(App),
  // }).$mount(container ? container.querySelector('#app1') : '#app1');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();

  let { registerMicroApps, setDefaultMountApp, start } = require('qiankun');
  // 注册子应用
  registerMicroApps([
    {
      name: "main-hello", // 子应用名称
      entry: "//localhost:9090", // 子应用入口
      container: "#container22", // 子应用所在容器
      activeRule: "/main", // 子应用触发规则（路径）
      props: {
        development: 'ceshi'
      },
      sandbox: {
        strictStyleIsolation: true
      }
    },
    {
      name: "sub-hello", // 子应用名称
      entry: "//localhost:8091", // 子应用入口
      container: "#container11", // 子应用所在容器
      activeRule: "/vue", // 子应用触发规则（路径）
      props: {
        development: 'ceshi'
      },
      sandbox: {
        strictStyleIsolation: true
      }
    }
  ]);

  // 启动默认应用
  // setDefaultMountApp("/");

  // 开启服务
  start();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main app', props);
  console.log('router ==>', router);
  render(props);
}

export async function unmount() {
  console.log('[vue] vue app unmount');
  const cachedInstance = instance.cachedInstance || instance;
  window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance;
  const cachedNode = cachedInstance._vnode;
  if (!cachedNode.data.keepAlive) cachedNode.data.keepAlive = true;
  cachedInstance.catchRoute = {
    apps: [...instance.$router.apps]
  }
  instance.$destroy();
  routerTemp = null;
  instance.$router.apps = [];
}
