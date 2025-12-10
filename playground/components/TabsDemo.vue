<template>
  <h1>NkTabs demo</h1>
  <NkCard class="demo">
    <template #header>
      Tablad demo
    </template>
    <NkTabs>
      <template #Tablad-1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
      <template #Tablad-2>Je bouwt 15 componenten uit de onderstaande lijst, verdeeld over drie moeilijkheidsniveaus.
        De verdeling ligt vast:

        5 Basiscomponenten (Simpele, visuele componenten zonder logica)
        7 Middelzware componenten (Componenten met state, props of interactie)
        3 Complexe componenten (Componenten met meer logica of interne structuur)
        Zo oefen je met verschillende soorten componentarchitectuur — van eenvoudige visuele blokken tot meer dynamische en interactieve UI-elementen.</template>
      <template #Tablad-3>According to all known laws of aviation, there is no way a bee should be able to fly.
        Its wings are too small to get its fat little body off the ground.
        The bee, of course, flies anyway because bees don't care what humans think is impossible.
        Yellow, black. Yellow, black. Yellow, black. Yellow, black.
        Ooh, black and yellow!
        Let's shake it up a little.
        Barry! Breakfast is ready!
        Coming!
        Hang on a second.
        Hello?
        Barry?
        Adam?
        Can you believe this is happening?
        I can't.
        I'll pick you up.
        Looking sharp.
        Use the stairs, Your father paid good money for those.
        Sorry. I'm excited.
        Here's the graduate.
        We're very proud of you, son.
        A perfect report card, all B's.
        Very proud.
        Ma! I got a thing going here.
        You got lint on your fuzz.
        Ow! That's me!
        Wave to us! We'll be in row 118,000.
        Bye!
        Barry, I told you, stop flying in the house!
        Hey, Adam.
        Hey, Barry.
        Is that fuzz gel?
        A little. Special day, graduation.
        Never thought I'd make it.
        Three days grade school, three days high school.
        Those were awkward.</template>
    </NkTabs>
  </NkCard>
</template>

<script setup lang="ts">
import { NkTabs } from "nonk-ui";
import {NkCard} from "nonk-ui";

</script>

<style scoped>
.demo {
  max-width: 600px;
  margin: 0 auto;

}
</style>