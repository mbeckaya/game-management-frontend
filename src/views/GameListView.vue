<script setup lang="ts">
import DefaultTemplate from '@/components/template/DefaultTemplate.vue';
import GameList from '@/components/game/GameList.vue';
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
