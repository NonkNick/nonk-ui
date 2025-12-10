<template>
  <i :class="[`nk-icon`,`nk-icon--${ size }`]">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import type { NkIconProps } from './NkIcon';

withDefaults(defineProps<NkIconProps>(), {
  size: 'medium'
});
</script>

<style lang="scss">
@import "./NkIcon.scss";
</style>