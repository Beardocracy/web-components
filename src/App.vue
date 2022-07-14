<template>
  <header>
    <div class="explosions"></div>
    <img
      class="logo"
      src="@components/EasyScoreboard/images/CheapandEasy_July2022.png"
    />
    <div class="explosions"></div>
  </header>
  <scoreboard-view></scoreboard-view>
</template>

<script setup>
import ScoreboardView from "./views/ScoreboardView.vue";
</script>

<style scoped>
header {
  @apply flex flex-row;
  width: 100%;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  @apply font-bold;
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
