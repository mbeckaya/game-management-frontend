<script setup lang="ts">
import { boolToYesNo } from '@/uitls/helper.ts';
import type { Game } from '@/types/game.ts';

type Props = {
  games: Game[],
}

defineProps<Props>();
</script>

<template>
  <section class="overflow-x-auto">
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