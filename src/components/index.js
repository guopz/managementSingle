import YeCharts from './YeCharts';

const install = function(Vue, opts = {}) {
  Vue.component(YeCharts.name, YeCharts);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default  { install };
