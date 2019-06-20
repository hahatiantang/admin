import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {post,get} from './../config/http/http'
Vue.config.productionTip = false;

console.log('111',process.env)
Vue.prototype.$get=get;
Vue.prototype.$post=post;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
