import pickBy from 'lodash/pickBy'
import { ActionTree, MutationTree } from 'vuex'

export interface IEnvironments {
  [key: string]: string | undefined
}

interface IState {
  environments: IEnvironments
}
export function state(): IState {
  return {
    environments: {},
  }
}

export const mutations: MutationTree<IState> = {
  setEnvironment(state, environments: IEnvironments) {
    state.environments = environments
  },
}

export const actions: ActionTree<IState, IState> = {
  async nuxtServerInit({ commit }) {
    commit('setEnvironment', extractNuxtEnvironments(process.env))
  },
}

function extractNuxtEnvironments(environments: IEnvironments): IEnvironments {
  return pickBy(environments, (_value, key) => key.indexOf('NUXT_APP') !== -1)
}
