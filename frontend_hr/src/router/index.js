import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Insight from '../views/Insight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/insight',
      name: 'Insight',
      component: Insight
    }
  ]
})

export default router
