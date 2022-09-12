import Vue from 'vue'

import elementConfig from '@/utils/element-config.js'
import '@/assets/styles/index.less'

import App from './App.vue'
import hunru from './mixin'
import plugins from './plugins'
import store from './store/index'
import VueRouter from 'vue-router'
import router from '@/router'
import request from '@/utils/request.js'


Vue.config.productionTip = false;
// 全局注册混入
Vue.mixin(hunru);

// 使用插件
Vue.use(plugins);
Vue.use(elementConfig);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
	  // 注册全局事件总线
  	Vue.prototype.$bus = this;
    // 封装axios
    Vue.prototype.request = request;
  }
}).$mount('#app')
