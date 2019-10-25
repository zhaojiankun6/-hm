/* eslint-disable no-undef */
import VueRouter from 'vue-router'
import vue from 'vue'
import login from '../router-view/login.vue'

vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login',
      component: login
    }
  ]
})

export default router
