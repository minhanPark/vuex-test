import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/index.vue";
import ListView from "../views/list.vue";
import TestView from "../views/test.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: IndexView,
    },
    {
      path: "/list",
      component: ListView,
    },
    {
      path: "/test",
      component: TestView,
    },
  ],
});
