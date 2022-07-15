<template>
  <span :class="result">{{ message }}</span>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  green: {
    type: Boolean,
    required: false,
  },
  red: {
    type: Boolean,
    required: false,
  },
});

const result = computed(() => {
  if (props.green.value) {
    return "good";
  }
  if (props.red.value) {
    return "bad";
  }
  return "";
});
</script>
