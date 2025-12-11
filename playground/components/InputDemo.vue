<template>
  <h1>NkInput demo</h1>

  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px; margin: 0 auto;">

    <div>
      <h3>Basic Input</h3>
      <NkInput placeholder="Enter text..." />
    </div>

    <div>
      <h3>With Label</h3>
      <NkLabel htmlBind="input-with-label">Username</NkLabel>
      <NkInput id="input-with-label" placeholder="Enter your username" />
    </div>

    <div>
      <h3>Sizes</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <NkLabel htmlBind="input-small">Small</NkLabel>
          <NkInput id="input-small" size="small" placeholder="Small input" />
        </div>
        <div>
          <NkLabel htmlBind="input-medium">Medium</NkLabel>
          <NkInput id="input-medium" size="medium" placeholder="Medium input" />
        </div>
        <div>
          <NkLabel htmlBind="input-large">Large</NkLabel>
          <NkInput id="input-large" size="large" placeholder="Large input" />
        </div>
      </div>
    </div>

    <div>
      <h3>Disabled</h3>
      <NkLabel htmlBind="input-disabled">Disabled Input</NkLabel>
      <NkInput id="input-disabled" disabled placeholder="This input is disabled" />
    </div>

    <div>
      <h3>Interactive (v-model)</h3>
      <NkLabel htmlBind="input-interactive">Type something:</NkLabel>
      <NkInput id="input-interactive" v-model="inputValue" placeholder="Start typing..." />
      <p style="margin-top: 0.5rem; color: #6b7280;">
        Value: <strong>{{ inputValue || '(empty)' }}</strong>
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NkInput, NkLabel } from 'nonk-ui';

const inputValue = ref('');
</script>

<style scoped>

</style>