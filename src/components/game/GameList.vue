<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/games.ts';
import GameListTable from '@/components/game/GameListTable.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import AlertBox from '@/components/AlertBox.vue';

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
  <GameListTable v-if="hasGames" :games="games" />

  <LoadingSpinner v-if="isLoading" />

  <AlertBox v-if="errorMessage" type="error">
    {{ errorMessage }}
  </AlertBox>
</template>