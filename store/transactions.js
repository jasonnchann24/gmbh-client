export const state = () => ({
  transaction: {},
  transactions: {},
  ts: {}
})

export const getters = {
  TRANSACTION(state) {
    return state.transaction
  },
  TRANSACTIONS(state) {
    return state.transactions
  },
  TS(state) {
    return state.ts
  }
}

export const mutations = {
  SET_TRANSACTION(state, payload) {
    state.transaction = payload
  },
  SET_TRANSACTIONS(state, payload) {
    state.transactions = payload
  },
  SET_TS(state, payload) {
    state.ts = payload
  }
}

export const actions = {
  async CREATE_TRANSACTION({ commit }, payload) {
    const data = await this.$axios.$post(`transactions/`, payload)
    commit('SET_TRANSACTION', data)
  },
  async GET_TRANSACTIONS({ commit }, page = 1) {
    const data = await this.$axios.$get(`transactions?page=${page}`)
    commit('SET_TRANSACTIONS', data)
  },
  async GET_TRANSACTION({ commit }, id) {
    const data = await this.$axios.$get(`transactions/${id}`)
    commit('SET_TRANSACTION', data)
  },
  async CREATE_TRANSACTION_SLIP({ commit }, payload) {
    const data = await this.$axios.$post(`transfer-evidence/`, payload)
    commit('SET_TS', data)
  }
}
