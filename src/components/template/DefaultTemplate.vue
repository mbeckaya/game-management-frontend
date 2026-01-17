<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="bg-gray-700 text-white p-4">
    <RouterLink to="/" class="text-2xl font-bold">
      Gaming Inc
    </RouterLink>
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