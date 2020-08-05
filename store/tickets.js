export const state = () => ({
  ticket: {}
})

export const getters = {
  TICKET(state) {
    return state.ticket
  }
}

export const mutations = {
  SET_TICKET(state, payload) {
    state.ticket = payload
  }
}

export const actions = {
  async CREATE_TICKET({ commit }, payload) {
    const data = await this.$axios.$post('tickets', payload)
    commit('SET_TICKET', data)
  }
}
