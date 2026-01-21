import { createRouter, createWebHistory } from 'vue-router'
import GameListView from '../views/GameListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game-list',
      component: GameListView,
    },
  ],
})

export default router
