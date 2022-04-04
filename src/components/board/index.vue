<template>
  <article>
    <img :src="board.thumbnail" class="board__thumbnail" />
    <aside>
      <h2>{{ board.title }}</h2>
      <p>{{ board.description }}</p>
    </aside>
    <footer>
      <div>
        <img :src="board.logo" class="board__logo" />
        <span
          >by <b>{{ board.user }}</b></span
        >
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      board: this.item,
    };
  },
};
</script>

<style lang="scss" scoped>
article {
  background-color: $board-bg;
  border-radius: 0.5rem;
  /* width: calc(50% - 2rem); */
  margin: 1rem;
  height: max-content;
  overflow: hidden;
  aside {
    width: 100%;
    padding: 1rem;
  }
  footer {
    border-top: 1px solid #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1rem;
    > div {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      > span {
        color: #acacac;
        b {
          color: #ececec;
        }
      }
    }
  }
  .board__thumbnail {
    width: 100%;
  }
  .board__logo {
    width: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  img {
    width: fit-content;
    object-fit: cover;
  }
}
</style>
