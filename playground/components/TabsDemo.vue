<template>
  <h1>NkTabs demo</h1>
  <NkCard>
    <NkTabs>
      <template #tab-1>Tab 1</template>
      <template #tab-2>Tab 2</template>
      <template #tab-3>Tab 3</template>
    </NkTabs>
  </NkCard>
</template>

<script setup lang="ts">
import { NkTabs } from "nonk-ui";
import {NkCard} from "nonk-ui";

</script>

<style scoped>

</style>