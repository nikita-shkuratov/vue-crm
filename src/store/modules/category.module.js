import axios from '../../axios/request'
import store from '../index'

export default {
  namespaced: true,
  state () {
    return {
      categories: []
    }
  },

  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },
    addCategory (state, category) {
      state.categories.push(category)
    }
  },

  actions: {
    async createCategory ({ commit }, payload) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const response = await axios.post(
          `/users/${userId}/categories.json?auth=${token}`,
          payload
        )
        const { data } = await axios.patch(
          `/users/${userId}/categories/${response.data.name}.json?auth=${token}`,
          {
            id: response.data.name
          }
        )
        commit('addCategory', { data })
        store.dispatch('setMessage', {
          value: 'The category was created successfully.',
          type: true
        })
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async fetchCategories ({ commit }) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/categories.json?auth=${token}`
        )
        if (data) {
          const requests = Object.keys(data).map(id => ({ ...data[id], id })) // to do
          commit('setCategories', requests)
          return requests
        } else {
          return false
        }
      } catch (e) {
        console.log(e)
      }
    },
    async fetchCategoryById (_, categoryId) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/categories/${categoryId}.json?auth=${token}`
        )
        return { ...data, id: categoryId }
      } catch (e) {
        console.log(e)
      }
    },
    async updateCategory (_, payload) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.put(
          `/users/${userId}/categories/${payload.id}/.json?auth=${token}`,
          payload
        )
        store.dispatch('setMessage', {
          value: 'Category updated successfully.',
          type: true
        })
        return data
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    getCategories (state) {
      return state.categories
    }
  }
}
