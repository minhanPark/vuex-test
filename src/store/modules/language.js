const state = {
  language: "ko_KR",
};

const mutations = {
  setLanguage(state, newLanguage) {
    state.language = newLanguage;
  },
};

const getters = {
  getLanguage(state) {
    return state.language;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
