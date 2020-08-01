export const state = () => ({
  transaction: {}
})

export const getters = {
  TRANSACTION(state) {
    return state.transaction
  }
}

export const mutations = {
  SET_TRANSACTION(state, payload) {
    state.transaction = payload
  }
}

export const actions = {
  async CREATE_TRANSACTION({ commit }, payload) {
    const data = await this.$axios.$post(`transactions/`, payload)
    commit('SET_TRANSACTION', data)
  }
}
