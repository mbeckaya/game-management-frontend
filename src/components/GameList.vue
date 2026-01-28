<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { boolToYesNo } from '@/utils/helper'
  import type { Game } from '@/types/game'
  import { useFetch } from '@/composables/useFetch'
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import AlertMessage from '@/components/AlertMessage.vue'

  const games = ref<Game[]>([])
  const { isLoading, error, fetchData } = useFetch()

  const hasGames = computed(() => games.value.length > 0)

  onMounted(async () => {
    games.value = await fetchData('/api/v1/games')
  })
</script>

<template>
  <LoadingSpinner v-if="isLoading" size="xl" class="my-2" />

  <AlertMessage v-else-if="error" type="error">
    {{ error }}
  </AlertMessage>

  <p v-else-if="!hasGames">No games found</p>
  <section v-else class="overflow-x-auto">
    <table class="table table-zebra">
      <thead>
      <tr>
        <th>Title</th>
        <th>Platform</th>
        <th>Physical</th>
        <th>Digital</th>
        <th>Genre</th>
        <th>Publisher</th>
        <th>Release Year</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="game in games" :key="game.id">
        <td>{{ game.title }}</td>
        <td>{{ game.platform }}</td>
        <td>{{ boolToYesNo(game.isPhysical) }}</td>
        <td>{{ boolToYesNo(game.isDigital) }}</td>
        <td>{{ game.genre }}</td>
        <td>{{ game.publisher }}</td>
        <td>{{ game.release }}</td>
        <td>
          <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }" class="link">
            Details
          </RouterLink>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>