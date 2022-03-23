import { createRouter, createWebHistory } from 'vue-router'
import UserCategories from '../views/UserCategories.vue'
import UserToDo from '../views/UserToDo.vue'

const routes = [
  {
    path: '/',
    name: 'UserCategories',
    component: UserCategories
  },
  {
    path: '/test',
    name: 'UserToDo',
    component: UserToDo
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
