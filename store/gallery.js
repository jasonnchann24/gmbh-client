export const state = () => ({
  gallery: {}
})

export const getters = {
  GALLERY(state) {
    return state.gallery
  }
}

export const mutations = {
  SET_GALLERY(state, payload) {
    state.gallery = payload
  }
}

export const actions = {
  async GET_GALLERY({ commit }, page = 1) {
    const data = await this.$axios.$get(`photos?page=${page}`)
    commit('SET_GALLERY', data)
  }
}
