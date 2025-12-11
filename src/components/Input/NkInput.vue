<template>
  <input
      :class="[
      'nk-input',
      `nk-input--${size}`,
    ]"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
  />
</template>

<script setup lang="ts">
import type { NkInputProps } from './NkInput';

withDefaults(defineProps<NkInputProps>(), {
  size: 'medium',
  disabled: false,
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<style scoped lang="scss">
@import './NkInput.scss';
</style>