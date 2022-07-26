import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/update',
    anme: 'update',
    component: () => import('../views/Update.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
