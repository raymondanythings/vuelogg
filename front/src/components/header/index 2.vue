<template>
  <header>
    <v-logo />
    <v-title></v-title>
    <v-right></v-right>
  </header>
</template>

<script>
import VLogo from "./VLogo.vue";
import VTitle from "./VTitle.vue";
import VRight from "./VRight.vue";

export default {
  components: {
    VLogo,
    VTitle,
    VRight,
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
}
</style>
