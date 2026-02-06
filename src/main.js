import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // Ensure your Tailwind/CSS imports are here

const app = createApp(App)
app.use(router)
app.mount('#app')