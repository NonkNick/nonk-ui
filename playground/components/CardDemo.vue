<template>
  <h1>NkCard demo</h1>
  <div style="display: flex; flex-direction: row; gap: 2rem; max-width: 500px; margin: 0 auto;">

    <NkCard>
      Als default gaat de tekst in de card body. Met een template slot kan je de header en footer plaatsen.
    </NkCard>

    <NkCard>
      <template #header>
        Card met header
      </template>

      <p>Deze kaart is voorzien van een header en een footer</p>
      <p>Door middel van named slots</p>

      <template #footer>
        Footer
        <NkButton>Knopje</NkButton>
      </template>
    </NkCard>

  </div>
</template>

<script setup lang="ts">

import {NkCard} from "nonk-ui";
import {NkButton} from "@/components/Button";
</script>

<style scoped>

</style>