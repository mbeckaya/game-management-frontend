<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <RouterLink :to="{ name: 'game-list' }" class="btn btn-ghost text-xl">
        Gaming Inc
      </RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <RouterLink :to="{ name: 'game-list' }">List</RouterLink>
      </ul>
    </div>
  </header>

  <main class="max-w-4xl mx-auto p-4">
    <slot name="headline"></slot>

    <slot name="content"></slot>
  </main>

  <footer class="text-sm bg-gray-700 text-white p-4">
    <slot name="footer">
      &copy; 2026 Gaming Inc
    </slot>
  </footer>
</template>