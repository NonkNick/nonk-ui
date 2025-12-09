<template>
  <button
      :class="[
      'nk-button',
      `nk-button--${variant}`,
      `nk-button--${size}`,
    ]"
      :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { NkButtonProps } from './NkButton';

withDefaults(defineProps<NkButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
});
</script>

<style scoped lang="scss">
@import './NkButton.scss';
</style>