<template>
  <div class="header">
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
    />
    <figure>
      <img
        @click="celebrate"
        src="./images/CheapandEasy_July2022.png"
        alt="CElogo"
      />
    </figure>
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
    />
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";

const visible = ref(false);
const celebrate = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

const colorPalette = ["#058A73", "#888B34", "#E5AB22", "#DC4534"];
</script>

<style scoped>
img {
  @apply justify-self-center;
  height: 150px;
  width: auto;
}
img:hover {
  cursor: pointer;
}
.header {
  @apply flex flex-row items-center justify-center w-full;
  overflow: visible;
}
.explosions {
  overflow: visible;
}
</style>
