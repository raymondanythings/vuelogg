import Vue from "vue";

console.log("OK");
declare module "" {
  interface ComponentPublicInstance {
    $myGlobal: string;
  }
}

declare module "vue/type/options" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> {
    myOption?: string;
  }
}
