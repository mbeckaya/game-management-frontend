<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import BaseLayout from '@/components/BaseLayout.vue'
  import GameDetail from '@/components/GameDetail.vue'

  const route = useRoute()
  const id = route.params.id as string
</script>

<template>
  <BaseLayout>
    <template #headline>
      <h1 class="text-xl font-bold">Game Details</h1>
    </template>

    <template #content>
      <GameDetail :id="id" />
    </template>
  </BaseLayout>
</template>