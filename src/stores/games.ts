import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Game } from '@/types/game';
import { API_URL } from '@/uitls/constants';

export const useGameStore = defineStore('games', () => {
  /**
   * States
   */
  const games = ref<Game[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref('');

  /**
   * Getters
   */
  const hasGames = computed(
      () => games.value.length > 0
  );

  /**
   * Actions
   */
  async function fetchGames() {
    try {
      isLoading.value = true;

      const response = await fetch(`${API_URL}/api/v1/games`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      games.value = await response.json();
    } catch (error: unknown) {
      console.error(error);
      errorMessage.value = 'Failed to fetch games';
    } finally {
      isLoading.value = false;
    }
  }

  return {
    games,
    hasGames,
    isLoading,
    errorMessage,
    fetchGames,
  };
});
