<script setup lang="ts">
import DefaultTemplate from '@/components/DefaultTemplate.vue';
import GameList from '@/components/GameList.vue';
</script>

<template>
    <DefaultTemplate>
      <template #headline>
        <h1 class="text-xl font-bold">Game List</h1>
      </template>

      <template #content>
        <GameList />
      </template>
    </DefaultTemplate>
</template>
