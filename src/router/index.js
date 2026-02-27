import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Software from '../views/Software.vue'
import Publications from '../views/Publications.vue'
import ArtifactDetail from '../views/ArtifactDetail.vue'
import PaperDetail from '../views/PaperDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/software', component: Software },
  { path: '/publications', component: Publications },
  // Dynamic detail routes
  { path: '/software/:id', component: ArtifactDetail, props: true },
  { path: '/paper/:id', component: PaperDetail, props: true }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})