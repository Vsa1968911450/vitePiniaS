import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({
  history: routerHistory,
  routes: [
    {
        name: 'about',
        path: '/about',
        component: () => import('../views/about.vue')
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('../views/index.vue')
    },
  ]
})
export default router