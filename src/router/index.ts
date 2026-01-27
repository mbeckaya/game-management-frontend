import { createRouter, createWebHistory } from 'vue-router'
import GameListView from '../views/GameListView.vue'
import GameDetailView from '../views/GameDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game-list',
      component: GameListView,
    },
    {
      path: '/games/:id',
      name: 'game-detail',
      component: GameDetailView,
    },
  ],
})

export default router
