<template>
  <figure class="logo">
    <img
      @click="celebrate"
      src="./images/CheapandEasy_July2022.png"
      alt="CElogo"
    />
  </figure>
  <Teleport to=".explosions_l">
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
    />
  </Teleport>
  <Teleport to=".explosions_r">
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
    />
  </Teleport>
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
figure.logo {
  @apply border-2;
  position: absolute;
  top: 0;
  right: 50%;
}
img {
  @apply justify-self-center;
  height: 150px;
  width: auto;
}
img:hover {
  cursor: pointer;
}
</style>
