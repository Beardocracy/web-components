<template>
  <ul class="mt-8">
    <li v-for="drunk in drunkList.drunks" :key="drunk.name" class="drunk">
      <AccBlock :message="drunk.score" />
      <span>{{ drunk.name }}</span>
      <span>{{ drunk.favorite }}</span>
      <span>{{ drunk.expensive }}</span>
      <span>{{ drunk.cheapest }}</span>
      <span>{{ drunk.variety_one }}</span>
      <span>{{ drunk.exp_one }}</span>
      <span>{{ drunk.cheap_one }}</span>
      <span>{{ drunk.variety_two }}</span>
      <span>{{ drunk.exp_two }}</span>
      <span>{{ drunk.cheap_two }}</span>
      <span>{{ drunk.variety_three }}</span>
      <span>{{ drunk.exp_three }}</span>
      <span>{{ drunk.cheap_three }}</span>
    </li>
  </ul>
</template>

<script setup>
import { useDrunkStore } from "@/stores/drunks";
import AccBlock from "./AccBlock.vue";

const drunkList = useDrunkStore();
</script>

<style scoped>
.drunk {
  @apply grid justify-items-center;
  grid-template-columns: repeat(14, 1fr);
}
</style>
