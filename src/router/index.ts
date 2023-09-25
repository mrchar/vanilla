import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
