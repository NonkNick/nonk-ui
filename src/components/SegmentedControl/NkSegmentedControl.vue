<template>
  <div class="nk-segmented-control">
    <button
        v-for="option in options"
        :key="option.value"
        :class="[
        'nk-segmented-control__option',
        { 'nk-segmented-control__option--active': modelValue === option.value }
      ]"
        @click="handleClick(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NkSegmentedControlProps, NkSegmentedControlEmits } from './NkSegmentedControl';

defineProps<NkSegmentedControlProps>();

const emit = defineEmits<NkSegmentedControlEmits>();

const handleClick = (value: string | number) => {
  emit('update:modelValue', value);
};
</script>

<style scoped lang="scss">
@import './NkSegmentedControl.scss';
</style>