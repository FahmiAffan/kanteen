<template>
  <div>
    <h1>Nama Saya {{ $title }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",

  data() {
    return {
      title: "Fahmi affan",
    };
  },
};
</script>

<style>
</style>
