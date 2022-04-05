<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import Layout from "./layout/Default.vue";
export default {
  components: {
    Layout,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Roboto:wght@300;400&display=swap");
* {
  box-sizing: border-box;
}

body {
  background-color: $body-color;
  color: white;
  font-family: "Roboto", "Nanum Gothic Coding", sans-serif;
}
#app {
  /* max-width: 800px; */
  width: calc(80% - 2rem);
  margin: 0 auto;
}
</style>
