<template>
  <main>
    <section>
      <VBoard v-for="item in items" :key="item.id" :item="item"></VBoard>
    </section>
  </main>
</template>

<script>
import data from "@/data";
import VBoard from "@/components/board/";

export default {
  components: {
    VBoard,
  },
  data() {
    return {
      items: data.data,
    };
  },
};
</script>

<style lang="scss">
main {
  /* max-width: 800px; */
  margin: 0 auto;
  section {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -1rem;
  }
}
</style>
