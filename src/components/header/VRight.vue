<template>
  <div class="header-right__wrapper">
    <svg
      class="w-[20px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
    <img src="../../assets/profile2.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
img {
  width: 30px;
}
.header-right__wrapper {
  display: flex;
  align-items: center;
  position: relative;
  > * {
    margin: 0 10px;
  }
}
</style>
