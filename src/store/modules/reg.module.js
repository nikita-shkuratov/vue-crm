import axios from 'axios'
import { error } from '../../helpers/error'

export default {
  namespaced: true,
  state () {
    return { token: localStorage.getItem('jwt-token') || null, user: null }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    },
    setUser (state, userData) {
      console.log('userData', userData)
      state.user = userData
    }
  },

  actions: {
    async reg ({ commit, dispatch }, payload) {
      try {
        const url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF1zsP6oJi3Mr2311L3YiY8KD3HShnSUQ'
        const { data } = await axios.post(url, {
          email: payload.email,
          password: payload.password
        })
        commit('setToken', data.idToken)

        const response = await axios.post(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users.json?auth=${data.idToken}`,
          payload
        )
        console.log('response', response)
        /*    if (response.status === 200) {
          localStorage.setItem('db-user', response.data.name)
          commit('setUser', {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email
          })
        } */
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger'
          },
          { root: true }
        )
        throw new Error()
      }
    },
    async loadUser ({ commit }, store) {
      try {
        const token = store.getters['auth/token']
        const id = localStorage.getItem('db-user')
        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${id}.json?auth=${token}`
        )
        commit('setUser', data)
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    getUser (state) {
      return state.user
    }
  }
}
