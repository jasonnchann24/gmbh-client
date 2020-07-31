export const state = () => ({
  packages: {},
  package: {}
})

export const getters = {
  PACKAGES(state) {
    return state.packages
  },
  PACKAGE(state) {
    return state.package
  }
}

export const mutations = {
  SET_PACKAGES(state, payload) {
    state.packages = payload
  },
  SET_PACKAGE(state, payload) {
    state.package = payload
  }
}

export const actions = {
  async GET_PACKAGES({ commit }, page = 1) {
    const data = await this.$axios.$get('packages?page=' + page)
    commit('SET_PACKAGES', data)
  },

  async GET_PACKAGE({ commit }, id) {
    const data = await this.$axios.$get(`packages/${id}`)
    commit('SET_PACKAGE', data)
  }
}
