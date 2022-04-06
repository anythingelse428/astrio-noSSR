import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {

    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "MainPage" */ '../views/MainPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "CartPage" */ '../views/CartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
