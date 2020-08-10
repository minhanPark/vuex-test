import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/index.vue";
import ListView from "../views/list.vue";
import TestView from "../views/test.vue";
import Editable from "../views/editableList.vue";
import Table from "../views/editTest.vue";
import { store } from "../store/index";

const guard = (to, from, next) => {
  console.log("beforeEnter worked");
  console.log("to is", to);
  console.log("from is", from);
  console.log("beforeEnter store", store.state);
  next();
};

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: IndexView,
    },
    {
      path: "/list",
      component: ListView,
      beforeEnter: guard,
    },
    {
      path: "/test",
      component: TestView,
      // beforeEnter(to, from, next) {
      //   console.log("beforeEnter worked");
      //   console.log(to, from);
      //   next();
      // },
      // beforeRouteUpdate(to, from, next) {
      //   console.log("beforeRouteUpdate worked");
      //   next();
      // },
      // beforeRouteLeave(to, from, next) {
      //   console.log("beforeRouteLeave worked");
      //   next();
      // },
    },
    {
      path: "/edit",
      component: Editable,
    },
    {
      path: "/table",
      component: Table,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 네비게이션이 트리거될 때마다 가드가 작성 순서에 따라 호출되기 전의 모든 경우에 발생
  console.log("beforeEach worked");
  console.log("---------------------------------");
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }
  console.log("---------------------------------");
  console.log("to is", to);
  console.log("from is", from);
  next();
  // 만약에 프로젝트에서 사용한다고 하면 어떻게 사용할 수 있을까?
  // 로컬 스토리지에 옵타움 티켓이 존재하는 지 유무를 확인하고 없으면 로그인 페이지로 보낸다.
});

// router.beforeResolve((to, from, next) => {
//   //모든 컴포넌트 가드와 비동기 라우트 컴포넌트를 불러온 후 네비게이션 가드를 확인하기 전에 호출
//   console.log("beforeResolve worked");
//   console.log("to is", to);
//   console.log("from is", from);
//   next();
// });

// router.afterEach((to, from) => {
//   console.log("afterEach worked");
//   console.log("to is", to);
//   console.log("from is", from);
// });
