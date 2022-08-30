import Vue from 'vue'
import App from './App.vue'
import hunru from './mixin'
import plugins from './plugins'
import store from './store/index-modules'
import router from '@/router'
import {Container, Header, Main, Aside, Row, Button} from 'element-ui'

Vue.config.productionTip = false;
// 全局注册混入
Vue.mixin(hunru);

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Row);
Vue.use(Button);

// 使用插件
Vue.use(plugins);
Vue.use(router);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
	  // 注册全局事件总线
  	Vue.prototype.$bus = this;
  }
}).$mount('#app')
