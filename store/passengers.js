export const state = () => ({
  passengers: {},
  master_passenger: {},
  emergency_contact: {}
})

export const getters = {
  PASSENGERS(state) {
    return state.passengers
  },
  MASTER_PASSENGER(state) {
    return state.master_passenger
  },
  E_CONTACT(state) {
    return state.emergency_contact
  }
}

export const mutations = {
  SET_PASSENGERS(state, payload) {
    state.passengers = payload
  },
  SET_MASTER_PASSENGER(state, payload) {
    state.master_passenger = payload
  },
  SET_E_CONTACT(state, payload) {
    state.emergency_contact = payload
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
  },
  async CREATE_EMERGENCY_CONTACT({ commit }, payload) {
    const data = await this.$axios.$post('emergency-contact/', payload)
    commit('SET_E_CONTACT', data)
  }
}
