<template>
  <h1>NkProgress demo</h1>

  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px; margin: 0 auto;">

    <div>
      <h3>Progress 30%</h3>
      <NkProgress :value="30" />
    </div>

    <div>
      <h3>Progress 65%</h3>
      <NkProgress :value="65" />
    </div>

    <div>
      <h3>Auto</h3>
      <NkProgress :value="autoProgress" />
    </div>

    <div>
      <h3>Interactive ({{ progressValue }}%)</h3>
      <NkProgress :value="progressValue" />
      <div style="display: flex; gap: 1rem; margin-top: 1rem;">
        <NkButton @click="progressValue = Math.max(0, progressValue - 10)">-10</NkButton>
        <NkButton @click="progressValue = Math.min(100, progressValue + 10)">+10</NkButton>
        <NkButton @click="progressValue = 0">Reset</NkButton>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import { NkProgress, NkButton } from 'nonk-ui';

const progressValue = ref(45);

const autoProgress = ref(0);
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    if (autoProgress.value >= 100) {
      autoProgress.value = 0;
    } else {
      autoProgress.value += 1;
    }
  }, 100);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>

</style>