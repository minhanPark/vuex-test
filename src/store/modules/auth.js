const state = {
  isLoggedIn: false,
};

const mutations = {
  login(state, value) {
    state.isLoggedIn = value;
  },
};

const getters = {
  getLoginStatus(state) {
    return state.isLoggedIn;
  },
};

export default {
  state,
  mutations,
  getters,
};
