
<template>
  <h1>NkPagination demo</h1>

  <div style="display: flex; flex-direction: column; gap: 1.5rem;">
    <div>
      <p>Page: {{ currentPage }}</p>
      <NkPagination
          v-model:current-page="currentPage"
          :total-pages="10"
      />
    </div>

    <div>
      <p>Page: {{ currentPage2 }}</p>
      <NkPagination
          v-model:current-page="currentPage2"
          :total-pages="20"
          :show-prev-next="false"
      />
    </div>

    <div>
      <p>Page: {{ currentPage3 }}</p>
      <NkPagination
          v-model:current-page="currentPage3"
          :total-pages="50"
          :max-visible="20"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NkPagination } from 'nonk-ui';

const currentPage = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
</script>