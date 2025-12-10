<template>
  <div class="nk-tabs">
    <div class="nk-tabs__nav">
      <div class="nk-tabs__tab"
           v-for="tab in tabNames"
           :key="tab"
           :class="{active: activeTab === tab}"
            @click="activeTab = tab">
        {{tab}} en activetab= {{activeTab}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from "vue"

const slots = useSlots()
const tabNames = computed(() =>
    Object.keys(slots).filter((name) => name !== "default")
)
const activeTab = ref(tabNames.value[0])
</script>

<style scoped lang="scss">
@import "./NkTabs.scss";
</style>