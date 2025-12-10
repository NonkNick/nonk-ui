<template>
  <h1>NkSegmentedControl demo</h1>

  <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">

    <div>
      <h3>Basis</h3>
      <NkSegmentedControl
          v-model="selected1"
          :options="options1"
      />
      <p>{{ selected1 }}</p>
    </div>

    <div>
      <h3>Meerdere</h3>
      <NkSegmentedControl
          v-model="selected2"
          :options="options2"
      />
      <p>{{ selected2 }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NkSegmentedControl } from 'nonk-ui';

const selected1 = ref('option1');
const selected2 = ref(1);

const options1 = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const options2 = [
  { value: 1, label: 'Day' },
  { value: 2, label: 'Week' },
  { value: 3, label: 'Month' },
  { value: 4, label: 'Year' }
];
</script>

<style scoped>

</style>