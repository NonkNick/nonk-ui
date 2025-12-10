<template>
  <div class="nk-tabs">
    <div class="nk-tabs__nav">
      <NkButton
          v-for="tab in tabNames"
          :key="tab"
          :class="['nk-tabs__tab', { active: activeTab === tab }]"
          @click="activeTab = tab"
      >
        {{ tab }}
      </NkButton>
    </div>
    <div class="nk-tabs__content">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from "vue";

const slots = useSlots();
const tabNames = computed(() =>
    Object.keys(slots).filter((name) => name !== "default")
);
const activeTab = ref(tabNames.value[0]);
</script>

<style lang="scss">
@import "./NkTabs.scss";
</style>