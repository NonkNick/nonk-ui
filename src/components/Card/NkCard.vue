<template>
  <div class="nk-card">
    <div v-if="$slots.header" class="nk-card__header">
      <slot name="header"></slot>
    </div>

    <div class="nk-card__body">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="nk-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "./NkCard.scss";
</style>