import 'normalize.css/normalize.css'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
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

Vue.use(ElementUI, { locale });
Vue.use(Ye, { locale });
Vue.config.productionTip = false;
Vue.prototype.$eventBus = eventBus;

// 权限控制开关
inject(false);

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

window.$vm = vm;
