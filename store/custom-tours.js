export const state = () => ({
  custom_tour: {}
})

export const getters = {
  CUSTOM_TOUR(state) {
    return state.custom_tour
  }
}

export const mutations = {
  SET_CUSTOM_TOUR(state, payload) {
    state.custom_tour = payload
  }
}

export const actions = {
  async CREATE_CUSTOM_TOUR({ commit }, payload) {
    const data = await this.$axios.$post('custom-tours', payload)
    commit('SET_CUSTOM_TOUR', data)
  }
}
