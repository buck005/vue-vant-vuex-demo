import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// require('lib-flexible'); // rem适配时需要导入插件，要不然不会生效
import "lib-flexible/flexible"
import { Lazyload } from 'vant';

Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
