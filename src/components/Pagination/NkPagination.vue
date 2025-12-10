<template>
  <nav class="nk-pagination">

    <NkButton
        v-if="showPrevNext"
        :class="['nk-pagination__button', { 'nk-pagination__button--disabled': currentPage === 1 }]"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
    >
      Prev
    </NkButton>

    <NkButton
        v-for="page in visiblePages"
        :key="page"
        :class="[
        'nk-pagination__button',
        'nk-pagination__button--page',
        { 'nk-pagination__button--active': page === currentPage }
      ]"
        @click="goToPage(page)"
    >
      {{ page }}
    </NkButton>

    <NkButton
        v-if="showPrevNext"
        :class="['nk-pagination__button', { 'nk-pagination__button--disabled': currentPage === totalPages }]"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
    >
      Next
    </NkButton>

  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { NkPaginationProps, NkPaginationEmits } from './NkPagination';
import {NkButton} from "nonk-ui";

const props = withDefaults(defineProps<NkPaginationProps>(), {
  maxVisible: 5,
  showPrevNext: true
});

const emit = defineEmits<NkPaginationEmits>();

const visiblePages = computed(() => {
  const pages: number[] = [];
  const half = Math.floor(props.maxVisible / 2);

  let start = Math.max(1, props.currentPage - half);
  let end = Math.min(props.totalPages, start + props.maxVisible - 1);

  if (end - start + 1 < props.maxVisible) {
    start = Math.max(1, end - props.maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const goToPage = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return;

  emit('update:currentPage', page);
};

</script>

<style scoped lang="scss">
@import "./NkPagination.scss";
</style>