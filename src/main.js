import Vue from 'vue'
import App from './App.vue'

// 引入bootStrap.css和字体图标样式
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
// MyHeader.vue的复用

Vue.config.productionTip = false

//全局配置axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

Vue.directive('permission', {
  inserted(ele, binding, vnode) {
    const arr = ['admin', 'test', 'developer']
    if (arr.includes(vnode.context[binding.expression])) {
      ele.style.display = 'inline-block'
    } else {
      ele.style.display = 'none'
    }
  },
})

// 全局指令
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
