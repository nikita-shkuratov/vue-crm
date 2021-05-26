import axios from '../../axios/request'
import store from '../index'

export default {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },

  mutations: {
    setRequests (state, requests) {
      state.requests = requests
    },
    addRequest (state, request) {
      state.requests.push(request)
    }
  },

  actions: {
    async createRequest ({ commit, dispatch }, payload) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const response = await axios.post(
          `/users/${userId}/requests.json?auth=${token}`,
          payload
        )
        await axios.patch(
          `/users/${userId}/requests/${response.data.name}.json?auth=${token}`,
          {
            id: response.data.name
          }
        )
        commit('addRequest', { ...payload, id: response.data.name })
        dispatch(
          'setMessage',
          {
            value: 'request created succsess',
            type: 'primary'
          },
          { root: true }
        )
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: e.message,
            type: 'danger'
          },
          { root: true }
        )
      }
    },

    async fetchRequests ({ commit, dispatch }) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/requests.json?auth=${token}`
        )
        const requests = Object.keys(data).map(id => ({ ...data[id], id })) // to do
        commit('setRequests', requests)
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    },

    async fetchRequest ({ dispatch }, id) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/requests/${id}.json?auth=${token}`
        )
        return data
      } catch (e) {
        dispatch(
          'setMessage',
          { value: e.message, type: 'danger' },
          { root: true }
        )
      }
    },

    async removeRequest ({ dispatch }, id) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        await axios.delete(`/users/${userId}/requests/${id}.json?auth=${token}`)
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

    async updateRequest ({ dispatch }, request) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        await axios.put(
          `/users/${userId}/requests/${request.id}.json?auth=${token}`,
          request
        )
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
  },

  getters: {
    requests (state) {
      return state.requests
    }
  }
}
