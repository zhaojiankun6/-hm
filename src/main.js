import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router/index.js'

// import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return routerPush.call(this, location).catch(error => error)
// }
Vue.use(element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
