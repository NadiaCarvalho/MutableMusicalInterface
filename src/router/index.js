import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PaperDetail from '../views/PaperDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/paper/:id', component: PaperDetail, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})