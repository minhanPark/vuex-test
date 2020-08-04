const state = {
  isLogin: false,
  information: {
    name: "러닝워터",
    job: "programmer",
    weather: "good",
    text: "teet",
  },
};

const mutations = {
  login(state, value) {
    state.isLogin = value;
  },
};

const getters = {
  getLoginStatus(state) {
    return state.isLogin;
  },
  getInformation(state) {
    return state.information;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
