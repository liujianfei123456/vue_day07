import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios= axios
Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})
Vue.directive('show',{
  inserted(el,binding,vonde){
    const arr=['admin','test','developer']
    if(arr.includes(vonde.context[binding.expression])){
      el.style.display='inline-block'
    }else{
      el.style.display='none'
    }
  }
})
new Vue({
  render: (h) => h(App),
}).$mount('#app')
