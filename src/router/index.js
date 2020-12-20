import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AiOccupancy from '../views/AiOccupancy.vue'
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
  {
    path: '/occupancy',
    name: 'occupancy',
    component: AiOccupancy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
