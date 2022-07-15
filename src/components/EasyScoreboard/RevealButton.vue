<template>
  <button-easy
    v-if="!showResult"
    @click="explode"
    :msg="revType"
    lightOrDark="light"
  />

  <Transition name="bounce">
    <div class="revealed" v-if="showResult" @click="showResult = !showResult">
      {{ revValue }}
    </div>
  </Transition>

  <Teleport to=".explosions_l">
    <ConfettiExplosion
      v-if="visible"
      :particleSize="18"
      :colors="colorPalette"
      :duration="2000"
    />
  </Teleport>
  <Teleport to=".explosions_r">
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
import { useDrunkStore } from "@/stores/drunks";

const drunkList = useDrunkStore();

const updateScores = (cat, value) => {
  drunkList.forEach((drunk) => {
    if (drunk.cat === value) {
      drunk.score++;
    }
  });
};

const showResult = ref(false);
const visible = ref(false);
const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
  showResult.value = true;
  updateScores(props.drunkCode.value, props.revValue.value);
};

const props = defineProps({
  revType: {
    type: String,
    required: true,
  },
  revValue: {
    type: String,
    required: true,
  },
  drunkCode: {
    type: String,
    required: false,
  },
});

const colorPalette = ["#058A73", "#888B34", "#E5AB22", "#DC4534"];
</script>

<style scoped>
.revealed {
  @apply font-extrabold text-center;
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
