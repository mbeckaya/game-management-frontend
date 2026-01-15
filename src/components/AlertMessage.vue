<script setup lang="ts">
type AlertType = 'success' | 'error'

type Props = {
  type?: AlertType
  showIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'success',
  showIcon: true,
})
</script>

<template>
  <div
      role="alert"
      class="alert"
      :class="{
      'alert-success': type === 'success',
      'alert-error': type === 'error',
    }"
  >
    <svg
        v-if="showIcon"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
    >
      <path
          v-if="type === 'success'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <span>
      <slot />
    </span>
  </div>
</template>
