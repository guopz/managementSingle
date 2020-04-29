import Vue from 'vue';
import AuthControl from '@/components/YeMixins/AuthControl';

const inject = (needAuth = true) => {
  if (needAuth) {
    //加载全局权限控制
    Vue.mixin(AuthControl);
  } else {
    //若不需要权限控制,则请求任何权限判断都将返回true;
    Vue.mixin(MockAuths);
  }
};

const MockAuths = {
  name: 'MockAuthControl',
  computed: {
    authStatus() {
      return this.proxy;
    }
  },
  data() {
    return {
      proxy: new Proxy(
        {},
        {
          get: function(target, key, receiver) {
            return true;
          }
        }
      )
    };
  }
};

export default inject;
