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
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const response = await axios.post(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/records.json?auth=${token}`,
          payload
        )
        const {
          data
        } = await axios.patch(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/records/${response.data.name}.json?auth=${token}`,
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
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/records.json?auth=${token}`
        )
        const requests = Object.keys(data).map(id => ({ ...data[id], id }))
        commit('setRecord', requests)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchRecordById (_, recordId) {
      console.log('rr', recordId)
      try {
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/records/${recordId}.json?auth=${token}`
        )
        return { ...data, id: recordId }
      } catch (e) {
        console.log(e)
      }
    },
    async updateRecords (_, payload) {
      try {
        const token = store.getters['auth/token']
        const { id } = store.getters.getUser
        await axios.put(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}/records/${payload.id}/.json?auth=${token}`,
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
