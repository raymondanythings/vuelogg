<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import Web from "./Web.vue";
export default {
  components: {
    Web,
  },
  data() {
    return {
      layout: "Web",
    };
  },
};
</script>

<style></style>
