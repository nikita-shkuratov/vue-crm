import axios from '../../axios/request'
import store from '../index'

export default {
  namespaced: true,
  state () {
    return {
      records: []
    }
  },

  mutations: {
    setRecord (state, record) {
      state.records = record
    },
    addRecord (state, record) {
      state.records.push(record)
    }
  },

  actions: {
    async createRecord ({ commit }, payload) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const response = await axios.post(
          `/users/${userId}/records.json?auth=${token}`,
          payload
        )
        const {
          data
        } = await axios.patch(
          `/users/${userId}/records/${response.data.name}.json?auth=${token}`,
          { id: response.data.name }
        )

        commit('addRecord', { data })
        store.dispatch('setMessage', {
          value: 'The record was created successfully.',
          type: true
        })
      } catch (e) {
        console.log(e)
      }
    },

    async fetchRecords ({ commit }) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/records.json?auth=${token}`
        )
        if (data) {
          const requests = Object.keys(data).map(id => ({ ...data[id], id }))
          commit('setRecord', requests)
          return requests
        } else {
          return false
        }
      } catch (e) {
        console.log(e)
      }
    },
    async fetchRecordById (_, recordId) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        const { data } = await axios.get(
          `/users/${userId}/records/${recordId}.json?auth=${token}`
        )
        return { ...data, id: recordId }
      } catch (e) {
        console.log(e)
      }
    },

    async updateRecords (_, payload) {
      try {
        const { token, userId } = store.getters['auth/authorizationData']
        await axios.put(
          `/users/${userId}/records/${payload.id}/.json?auth=${token}`,
          payload
        )
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    getRecords (state) {
      return state.records
    }
  }
}
