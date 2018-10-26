export function state() {
  return {
    version: null,
  }
}

export const mutations = {
  setVersion(state, version: string) {
    state.version = version
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setVersion', '0.0.3')
  },
}
