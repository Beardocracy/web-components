<template>
  <div class="reveal_container bg-purple-400">
    <Transition name="bounce">
      <div class="reveal-box">
        <button-easy
          v-if="showCategory"
          @click="explode"
          :msg="revType"
          lightOrDark="light"
        />
      </div>
    </Transition>
    <div class="reveal-box">
      <Transition name="bounce">
        <div class="revealed" v-if="showResult" @click="toggleBoxes">
          {{ revValue }}
        </div>
      </Transition>
    </div>
  </div>
  <Teleport to=".explosions">
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
      :duration="2000"
    />
  </Teleport>
</template>

<script setup>
import { nextTick, ref } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";
import ButtonEasy from "./ButtonEasy.vue";

const showResult = ref(false);
const showCategory = ref(true);
const visible = ref(false);
const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
  showCategory.value = false;
  setTimeout(() => (showResult.value = true), 0);
};

const toggleBoxes = () => {
  showCategory.value = !showCategory.value;
  showResult.value = !showResult.value;
};

defineProps({
  revType: {
    type: String,
    required: true,
  },
  revValue: {
    type: String,
    required: true,
  },
});

const colorPalette = ["#058A73", "#888B34", "#E5AB22", "#DC4534"];
</script>

<style scoped>
.reveal_container {
  @apply block;
  width: 150px;
  overflow: visible;
  margin: 0.5rem;
}
.reveal-box {
  margin: 20px;
  display: block;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.revealed {
  @apply font-extrabold text-center;
  text-align: 2.2;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.54);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
