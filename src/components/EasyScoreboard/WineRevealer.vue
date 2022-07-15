<template>
  <div class="button_list_titles">
    <div class="col-span-5">
      <h2>Top of the Tops Catchphrase</h2>
    </div>
    <div class="col-span-3">
      <h2>White Wines catchphrase 1</h2>
    </div>
    <div class="col-span-3">
      <h2>Red Wines catchphrase 2</h2>
    </div>
    <div class="col-span-3">
      <h2>Red Wines Catchphrase 3</h2>
    </div>
  </div>
  <div class="button_list">
    <div>Score</div>
    <div>Who</div>
    <div>Favs</div>

    <div>
      <reveal-button drunkCode="" :key="1" revType="Less $" revValue="A!" />
    </div>
    <div>
      <reveal-button drunkCode="" :key="2" revType="Most $" revValue="B!" />
    </div>
    <div>
      <reveal-button
        drunkCode="variety_one"
        revType="Variety"
        :revValue="variety_one"
        :key="3"
      />
    </div>
    <div>
      <reveal-button
        drunkCode="exp_one"
        revType="$$$"
        :revValue="expensive_one"
        :key="4"
      />
    </div>
    <div>
      <reveal-button drunkCode="" revType="$" :revValue="cheap_one" :key="5" />
    </div>
    <div>
      <reveal-button
        drunkCode="variety_two"
        revType="Variety"
        :revValue="variety_two"
        :key="6"
      />
    </div>
    <div>
      <reveal-button
        drunkCode="exp_two"
        revType="$$$"
        :revValue="expensive_two"
        :key="7"
      />
    </div>
    <div>
      <reveal-button drunkCode="" revType="$" :revValue="cheap_two" :key="8" />
    </div>
    <div>
      <reveal-button
        drunkCode="variety_three"
        revType="Variety"
        :revValue="variety_three"
        :key="9"
      />
    </div>
    <div>
      <reveal-button
        drunkCode="exp_three"
        revType="$$$"
        :revValue="expensive_three"
        :key="10"
      />
    </div>
    <div>
      <reveal-button
        drunkCode="cheap_three"
        revType="$"
        :revValue="cheap_three"
        :key="11"
      />
    </div>
  </div>
</template>

<script setup>
import { useWineStore } from "@/stores/wines";
import RevealButton from "@components/EasyScoreboard/RevealButton.vue";

const wine = useWineStore();
const variety_one = wine.one.variety.type;
const variety_two = wine.two.variety.type;
const variety_three = wine.three.variety.type;
const cheap_one = wine.one.cheap.letter;
const cheap_two = wine.two.cheap.letter;
const cheap_three = wine.three.cheap.letter;
const expensive_one = wine.one.expensive.letter;
const expensive_two = wine.two.expensive.letter;
const expensive_three = wine.three.expensive.letter;
</script>

<style scoped>
.button_list {
  @apply grid justify-items-center gap-1;
  height: 120px;
  align-content: center;
  grid-template-columns: repeat(14, 1fr);
}
.button_list div {
  @apply text-center;
}

.button_list_titles {
  @apply grid justify-items-center gap-x-6;
  align-content: flex-end;
  grid-template-columns: repeat(14, 1fr);
}
.button_list_titles div {
  @apply border-x-2 flex w-full justify-center;
}
h2 {
  @apply text-2xl font-bold;
}
</style>
