<template>

  <h1>NkButton demo</h1>
  <!-- Default -->
  <NkButton>Default Button</NkButton>

  <!-- Variants -->
  <NkButton variant="primary">Primary</NkButton>
  <NkButton variant="secondary">Secondary</NkButton>
  <NkButton variant="outline">Outline</NkButton>

  <!-- Sizes -->
  <NkButton size="small">Small</NkButton>
  <NkButton size="medium">Medium</NkButton>
  <NkButton size="large">Large</NkButton>

  <!-- Disabled -->
  <NkButton disabled>Disabled</NkButton>

  <!-- Combining props -->
  <NkButton variant="primary" size="large">Primary Large</NkButton>
  <NkButton variant="outline" size="small">Small Outline</NkButton>

  <!-- danger -->
  <NkButton variant="danger" size="small">Small Danger</NkButton>
  <NkButton variant="danger" size="medium">Medium Danger</NkButton>
  <NkButton variant="danger" size="large">Large Danger</NkButton>




</template>

<script setup lang="ts">
import { NkButton } from "nonk-ui";
</script>

<style scoped>

</style>
