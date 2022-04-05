import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../screen/HomePage.vue";
import TestPage from "../screen/TestPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/test",
    name: "TestPage",
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
