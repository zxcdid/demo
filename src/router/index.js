import Vue from 'vue'
import VueRouter from 'vue-router'
import Pie from '../views/Pie.vue'
import Table from '../views/Table.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Pie
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import('../views/Bar.vue')
  },
  {
    path: '/tabel',
    name: 'tabel',
    component: Table
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
