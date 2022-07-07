import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
import axios from 'axios';
Vue.directive('focus', {
  inserted(ele) {
    ele.focus();
  },
});

Vue.directive('permission', {
  inserted(ele, binding, vnode) {
    const arr = ['admin', 'test', 'developer']; //判断条件
    if (arr.includes(vnode.context[binding.expression])) {
      ele.style.display = 'inline-block';
    } else {
      ele.style.display = 'none';
    }
  },
});
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
