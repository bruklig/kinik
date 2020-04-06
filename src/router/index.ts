import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "HomePage" */ '../pages/HomePage.vue'),
  },
  // {
  //   path: '/items',
  //   name: 'Items',
  //   component: () => import(/* webpackChunkName: "ItemsPage" */ '../pages/ItemsPage.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
