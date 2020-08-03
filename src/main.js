import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/index";
import vuetify from "./plugins/vuetify";
import { router } from "./routes/index";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  store,
  router,
}).$mount("#app");
