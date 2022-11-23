import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePages from '../views/HomePages.vue'
import Dashboard from '../views/Dashboard.vue'
import Suggestions from '../views/Suggestions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePages',
      component: HomePages
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/suggestions',
      name: 'Suggestions',
      component: Suggestions
    }
  ]
})

export default router
