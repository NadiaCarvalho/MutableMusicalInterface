import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PaperDetail from '../views/PaperDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/paper/:id', name: 'PaperDetail', component: PaperDetail, props: true },

  // 2. Add the catch-all route at the bottom
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
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