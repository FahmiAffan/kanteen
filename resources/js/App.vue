<template>
  <router-view></router-view>
</template>

<script lang="ts">

import Home from "./views/home.vue"

export default {
  name: "app",
  components: {
    Home,
  },
};
</script>

<style>
</style>
