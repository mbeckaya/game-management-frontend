<script setup lang="ts">
  import { ref, computed } from 'vue'
  import axios from 'axios'
  import { API_URL } from '@/utils/constants'
  import { boolToYesNo } from '@/utils/helper'
  import type { Game } from '@/types/game'
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import AlertMessage from '@/components/AlertMessage.vue'

  const games = ref<Game[]>([])
  const isLoading = ref(false)
  const error = ref('')

  const hasGames = computed(() => games.value.length > 0)

  const fetchGames = async () => {
    try {
      isLoading.value = true
      const response = await axios.get(`${API_URL}/api/v1/games`)
      games.value = response.data
    } catch (err) {
      console.error(err)
      error.value = 'Failed to fetch games'
    } finally {
      isLoading.value = false
    }
  }

  fetchGames()
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
      </tr>
      </tbody>
    </table>
  </section>
</template>