<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { boolToYesNo } from '@/uitls/helper';
import { useGameStore } from '@/stores/games';
import LoadingState from '@/components/LoadingState.vue';
import AlertMessage from '@/components/AlertMessage.vue';

const gamesStore = useGameStore();
const {
  games,
  hasGames,
  isLoading,
  errorMessage
} = storeToRefs(gamesStore);
const { fetchGames } = gamesStore;

fetchGames();
</script>

<template>
  <AlertMessage v-if="errorMessage" type="error">
    {{ errorMessage }}
  </AlertMessage>

  <LoadingState v-else-if="isLoading" />

  <p v-else-if="!hasGames">
    No games found
  </p>

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
