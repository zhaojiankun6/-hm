import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 挂载到原型上
import router from '@/router/index.js'
import axios from '@/apis/axios.js'
Vue.prototype.$http = axios
Vue.use(element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
