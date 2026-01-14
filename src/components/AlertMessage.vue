<script setup lang="ts">
type AlertType = 'success' | 'error'

type Props = {
  type?: AlertType
}

withDefaults(defineProps<Props>(), {
  type: 'success',
});
</script>

<template>
  <div
      role="alert"
      class="rounded-md px-4 py-3 text-sm font-medium"
      :class="{
      'bg-green-100 text-green-800 border border-green-300': type === 'success',
      'bg-red-100 text-red-800 border border-red-300': type === 'error',
    }"
  >
    <slot />
  </div>
</template>
