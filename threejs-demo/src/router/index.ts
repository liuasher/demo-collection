import Vue from 'vue';
import Router from 'vue-router';
import RouterConfig from './module';

Vue.use(Router);

export default new Router({ routes: [...RouterConfig] });
