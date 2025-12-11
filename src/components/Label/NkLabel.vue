<template>
  <label :for="htmlBind" class="nk-label">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import type { NkLabelProps } from './NkLabel';

defineProps<NkLabelProps>();
</script>

<style scoped lang="scss">
@import './NkLabel.scss';
</style>