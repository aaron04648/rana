import { createRouter, createWebHistory } from 'vue-router'
import UserCategories from '../views/UserCategories.vue'

const routes = [
  {
    path: '/',
    name: 'UserCategories',
    component: UserCategories
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
