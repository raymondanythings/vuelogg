<template>
  <Header></Header>
  <slot></slot>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
