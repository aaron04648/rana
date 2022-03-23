import { createRouter, createWebHistory } from 'vue-router'
import UserCategories from '../views/UserCategories.vue'
import ToDoList from '../views/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'UserCategories',
    component: UserCategories
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: ToDoList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
