<script setup lang="ts">
  type Props = {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
  });
</script>

<template>
  <span
      role="status"
      aria-live="polite"
      class="loading loading-spinner"
      :class="`loading-${props.size}`"
  >
    <span class="sr-only">Data is loading</span>
  </span>
</template>