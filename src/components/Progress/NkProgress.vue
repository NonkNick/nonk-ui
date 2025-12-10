<template>
  <div class="nk-progress">
    <div class="nk-progress__bar-container">
      <div
          class="nk-progress__bar"
          :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { NkProgressProps } from './NkProgress';

const props = withDefaults(defineProps<NkProgressProps>(), {
  max: 100
});

const percentage = computed(() => {
  const pct = (props.value / props.max) * 100;
  return Math.min(Math.max(pct, 0), 100);
});
</script>

<style scoped lang="scss">
@import './NkProgress.scss';
</style>