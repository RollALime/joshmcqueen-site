import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EcologyView from '../views/EcologyView.vue'
import ITView from '../views/ITView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ecology',
      name: 'ecology',
      component: EcologyView,
    },
    {
      path: '/it',
      name: 'it',
      component: ITView,
    },
  ],
})

export default router