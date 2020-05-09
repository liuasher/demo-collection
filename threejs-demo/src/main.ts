import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import * as filters from './filters';
import * as directives from './directives';
import interceptor from './service/interceptor';
import App from './App.vue';

import 'element-ui/lib/theme-chalk/index.css';
import './vendor/element';

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 注册filters
Object.keys(filters).forEach((key: string) => {
  Vue.filter(key, (<any>filters)[key]);
});

// 注册directives
Object.keys(directives).forEach((key: string) => {
  Vue.directive((<any>directives)[key].name, (<any>directives)[key].handler);
});

// 注册拦截器
interceptor(router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
