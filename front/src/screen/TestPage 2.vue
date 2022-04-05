<template>
  <div>
    <textarea v-model="html"></textarea>
    <div v-html="$md(this.html)"></div>
  </div>
</template>

<script>
import html from "@/screen/test.html";

// Regex 적용 배열 리턴해야함

export default {
  data() {
    return {
      html: this.$md(this.$htmlParse(html)),
    };
  },
};
</script>

<style>
textarea {
  width: 100%;
  height: fit-content;
}
</style>
