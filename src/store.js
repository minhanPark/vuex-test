import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    addCounter(state) {
      return state.counter++;
    },
    multiCounter(state) {
      state.counter = state.counter * 2;
      return state.counter;
    },
  },
  actions: {
    multiCounter(context) {
      console.log(context);
      return context.commit("multiCounter");
    },
    addCounter(context) {
      console.log("addCounter", context);
      return context.commit("addCounter");
    },
  },
});
