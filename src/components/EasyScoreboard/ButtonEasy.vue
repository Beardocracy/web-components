<template>
  <button href="" class="btn-gradient">{{ msg }}</button>
</template>

<script setup>
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

let gradientOne = "#E5AB22";
let gradientTwo = "#DC4534";
let gradientThree = "#058A73";
</script>

<style scoped>
.btn-gradient {
  text-align: center;
  line-height: 2.2;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 4px;
  transition: all 300ms;
  -webkit-transition: all 300ms;
  color: rgba(0, 0, 0, 0.54);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.54);
}

.btn-gradient:hover {
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
