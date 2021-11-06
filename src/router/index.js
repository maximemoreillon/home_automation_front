import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Controls from '../views/Controls.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/controls',
    name: 'controls',
    component: Controls,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
