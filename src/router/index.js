import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PaperDetail from '../views/PaperDetail.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/paper/:id', 
    name: 'PaperDetail', 
    component: PaperDetail,
    props: true 
  }
]

const router = createRouter({
  // Using Hash History for easier GitHub Pages compatibility
  history: createWebHashHistory(),
  routes,
  // This ensures the page scrolls to top when you click a link
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router