export const state = () => ({
  articles: {},
  article: {}
})

export const getters = {
  ARTICLES(state) {
    return state.articles
  },
  ARTICLE(state) {
    return state.article
  }
}

export const mutations = {
  SET_ARTICLES(state, payload) {
    state.articles = payload
  },
  SET_ARTICLE(state, payload) {
    state.article = payload
  }
}

export const actions = {
  async GET_ARTICLES({ commit }, page = 1) {
    const data = await this.$axios.$get(`articles?page=${page}`)
    commit('SET_ARTICLES', data)
  },
  async GET_ARTICLE({ commit }, id) {
    const data = await this.$axios.$get(`articles/${id}`)
    commit('SET_ARTICLE', data)
  }
}
