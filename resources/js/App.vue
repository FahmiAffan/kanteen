<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Home from "./views/home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
</style>