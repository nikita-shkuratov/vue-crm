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
        const token = store.getters['auth/token']
        const user = store.getters.getUser
        const response = await axios.post(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${user.id}/categories.json?auth=${token}`,
          payload
        )
        const { data } = await axios.patch(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${user.id}/categories/${response.data.name}.json?auth=${token}`,
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
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/categories.json?auth=${token}`
        )
        const requests = Object.keys(data).map(id => ({ ...data[id], id }))
        commit('setCategories', requests)
        return requests
      } catch (e) {
        console.log(e)
      }
    },
    async fetchCategoryById (_, categoryId) {
      try {
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/categories/${categoryId}.json?auth=${token}`
        )
        return { ...data, id: categoryId }
      } catch (e) {
        console.log(e)
      }
    },
    async updateCategory (_, payload) {
      try {
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const { data } = await axios.put(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/categories/${payload.id}/.json?auth=${token}`,
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

  /* async load ({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.get(`/requests.json?auth=${token}`)
        const requests = Object.keys(data).map(id => ({ ...data[id], id }))
        commit('setRequests', requests)
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    },

    async loadOne ({ dispatch }, id) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.get(`/requests/${id}.json?auth=${token}`)
        return data
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    },

    async remove ({ dispatch }, id) {
      try {
        const token = store.getters['auth/token']
        await axios.delete(`/requests/${id}.json?auth=${token}`)
        dispatch(
          'setMessage',
          {
            value: 'Request was remove',
            type: 'primary'
          },
          { root: true }
        )
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    },

    async update ({ dispatch }, request) {
      try {
        const token = store.getters['auth/token']
        await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
        dispatch(
          'setMessage',
          {
            value: 'Request is update!',
            type: 'primary'
          },
          { root: true }
        )
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    }
  }, */
}
