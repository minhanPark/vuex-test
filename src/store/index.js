import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import language from "./modules/language";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    language,
  },
});
