<script setup lang="ts">
  import BaseLayout from '@/components/BaseLayout.vue'
  import GameList from '@/components/GameList.vue'
</script>

<template>
  <BaseLayout>
    <template #headline>
      <h1 class="text-xl font-bold">Game List</h1>
    </template>

    <template #content>
      <GameList />
    </template>
  </BaseLayout>
</template>