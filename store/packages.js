export const state = () => ({
  packages: {},
  package: {},
  package_gallery: {},
  gallery: [],
  package_id: '0',
  images: []
})

export const getters = {
  PACKAGES(state) {
    return state.packages
  },
  PACKAGE(state) {
    return state.package
  },
  PACKAGE_GALLERY(state) {
    return state.package_gallery
  },
  GALLERY(state) {
    return state.gallery
  },
  IMAGES(state) {
    return state.images
  }
}

export const mutations = {
  SET_PACKAGES(state, payload) {
    state.packages = payload
  },
  SET_PACKAGE(state, payload) {
    state.package = payload
  },
  SET_CURRENT_PACKAGE(state, payload) {
    state.package_id = payload
  },
  SET_PACKAGE_GALLERY(state, payload) {
    state.package_gallery = payload
    if (state.package_gallery.meta.id !== state.package_id) {
      state.gallery = []
    }

    state.package_id = payload.meta.id
    for (let i = 0; i < payload.data.length; i++) {
      state.gallery.push(payload.data[i])
    }
  },

  SET_IMAGES(state, payload) {
    state.images = payload
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
  },

  async GET_GALLERY({ commit }, { id, page = 1 }) {
    const data = await this.$axios.$get(`package-galleries/${id}?page=${page}`)
    data.meta.id = id.toString()
    commit('SET_PACKAGE_GALLERY', data)
  },

  async GET_PACKAGE_IMAGES({ commit }) {
    const data = await this.$axios.$get('package-images')
    commit('SET_IMAGES', data)
  }
}
