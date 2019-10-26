/* eslint-disable no-undef */
import VueRouter from 'vue-router'
import vue from 'vue'
import login from '../router-view/login.vue'
import home from '../router-view/home.vue'
import welcome from '../router-view/welocome.vue'
import notFond from '../router-view/404.vue'

vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login',
      component: login
    },
    {
      path: '/',
      component: home,
      children: [{
        path: '/',
        component: welcome
      }]
    },
    {
      path: '*',
      component: notFond
    }

  ]
})

export default router
