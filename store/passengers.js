export const state = () => ({
  passengers: {},
  master_passenger: {}
})

export const getters = {
  PASSENGERS(state) {
    return state.passengers
  },
  MASTER_PASSENGER(state) {
    return state.master_passenger
  }
}

export const mutations = {
  SET_PASSENGERS(state, payload) {
    state.passengers = payload
  },
  SET_MASTER_PASSENGER(state, payload) {
    state.master_passenger = payload
  }
}

export const actions = {
  async CREATE_PASSENGERS({ commit }, payload) {
    const data = await this.$axios.$post('passengers/', payload)
    commit('SET_PASSENGERS', data)
  },
  async CREATE_MASTER_PASSENGER({ commit }, payload) {
    const data = await this.$axios.$post('master-passenger/', payload)
    commit('SET_MASTER_PASSENGER', data)
  }
}
