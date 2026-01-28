<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Game } from '@/types/game'
  import { boolToYesNo } from '@/utils/helper'
  import { useFetch } from '@/composables/useFetch'
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import AlertMessage from '@/components/AlertMessage.vue'

  const props = defineProps<{
    id: string
  }>()

  const game = ref<Game>()
  const { isLoading, error, fetchData } = useFetch()

  onMounted(async () => {
    game.value = await fetchData(`/api/v1/games/${props.id}`)
  })
</script>

<template>
  <LoadingSpinner v-if="isLoading" size="xl" class="my-2" />

  <AlertMessage v-else-if="error" type="error">
    {{ error }}
  </AlertMessage>

  <section v-else-if="game">
    <ul>
      <li><span class="font-bold">Title:</span> {{ game.title }}</li>
      <li><span class="font-bold">Platform:</span> {{ game.platform }}</li>
      <li><span class="font-bold">Physical:</span> {{ boolToYesNo(game.isPhysical) }}</li>
      <li><span class="font-bold">Digital:</span> {{ boolToYesNo(game.isDigital) }}</li>
      <li><span class="font-bold">Genre:</span> {{ game.genre }}</li>
      <li><span class="font-bold">Publisher:</span> {{ game.publisher }}</li>
      <li><span class="font-bold">Release:</span> {{ game.release }}</li>
    </ul>
  </section>
</template>