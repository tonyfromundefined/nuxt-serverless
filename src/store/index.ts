export const state = () => ({
  version: null,
});

export const mutations = {
  setVersion(state, version: string) {
    state.version = version;
  },
};

export const actions = {
  async nuxtServerInit({ state, getters, commit, dispatch }, context: any) {
    commit("setVersion", "0.0.3");
  },
};
