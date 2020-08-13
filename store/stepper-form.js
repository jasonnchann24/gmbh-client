export const state = () => ({
  passengers: []
})

export const getters = {
  PASSENGERS(state) {
    return state.passengers
  }
}

export const mutations = {
  PUSH_PASSENGER(state, payload) {
    state.passengers.push(payload)
  },
  SET_PASSENGER(state, { payload, index }) {
    state.passengers[index] = payload
  },
  RESET_STEPPER(state) {
    state.passengers = []
  }
}
