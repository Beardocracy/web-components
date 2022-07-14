<template>
  <div class="hello">
    <hello-world msg="Hello World!" />
    <confetti-explosion />
  </div>
</template>

<script setup>
import ConfettiExplosion from "@components/ConfettiExplosion.vue";
import HelloWorld from "@components/HelloWorld.vue";
</script>

<style scoped>
.hello {
  @apply flex flex-col items-center justify-center;
}
</style>
