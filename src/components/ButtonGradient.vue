<template>
  <div :class="lightOrDark">
    <button href="" class="btn-gradient">{{ msg }}</button>
  </div>
</template>

<script setup>
import caSun from "@/assets/colors/caSun.js";

defineProps({
  msg: {
    type: String,
    required: true,
  },
  lightOrDark: {
    type: String,
    default: "light",
  },
});

let gradientOne = caSun.g1;
let gradientTwo = caSun.g3;
let gradientThree = caSun.g4;
</script>

<style scoped>
.btn-gradient {
  text-align: center;
  line-height: 2.2;
  display: block;
  margin: 10px;
  padding: 1rem;
  border-radius: 4px;
  transition: all 300ms;
  -webkit-transition: all 300ms;
}

.light,
.dark {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.light .btn-gradient {
  color: rgba(0, 0, 0, 0.54);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.54);
}

.light .btn-gradient:hover {
  color: #fff;
}

.dark .btn-gradient {
  color: rgba(255, 255, 255, 0.54);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.54);
}

.dark .btn-gradient:hover {
  color: #fff;
}

@keyframes Gradient {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

.btn-gradient:hover {
  box-shadow: 0 5px 8px rgba(63, 81, 181, 0.25);
  background: v-bind(gradientOne);
  background: linear-gradient(
    to right,
    v-bind(gradientOne) 0%,
    v-bind(gradientTwo) 50%,
    v-bind(gradientThree) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='v-bind(gradientOne)',endColorstr='v-bind(gradientThree)',GradientType=1);
  background-size: 400%;
  animation: Gradient 0.75s ease infinite;
}
</style>
