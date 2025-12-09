<template>
  <h1>NkButtonGroup demo</h1>

  <NkButtonGroup>
    <NkButton variant="primary">1</NkButton>
    <NkButton variant="secondary">2</NkButton>
    <NkButton variant="outline">3</NkButton>
    <NkButton variant="danger">4</NkButton>
    <NkButton variant="primary">5</NkButton>
    <NkButton variant="primary" size="small">6</NkButton>
    <NkButton variant="primary" size="medium">7</NkButton>
    <NkButton variant="primary" size="large">8</NkButton>

  </NkButtonGroup>

</template>

<script setup lang="ts">

import {NkButtonGroup} from "@/components/ButtonGroup";
import {NkButton} from "@/components/Button";
</script>

<style scoped>

</style>