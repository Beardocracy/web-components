<template>
  <div class="explosion">
    <button-gradient msg="Celebrate" lightOrDark="light" @click="explode" />
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
    />
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import caSun from "../assets/colors/caSun";
import ConfettiExplosion from "vue-confetti-explosion";
import ButtonGradient from "./ButtonGradient.vue";

const visible = ref(false);
const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

const colorPalette = [caSun.g1, caSun.g2, caSun.g3, caSun.g4, caSun.g5];
</script>

<style scoped>
.explosion {
  overflow: visible;
}
button {
}
</style>
