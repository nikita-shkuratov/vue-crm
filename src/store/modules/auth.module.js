import axios from 'axios'
import { error } from '../../helpers/error'

export default {
  namespaced: true,
  state () {
    return { token: localStorage.getItem('jwt-token') || null, userEmail: null }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    },
    logout (state) {
      state.token = null
      localStorage.removeItem('jwt-token')
    },
    setUserEmail (state, data) {
      state.userEmail = data
    }
  },

  actions: {
    async login ({ commit, dispatch }, payload) {
      try {
        const url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF1zsP6oJi3Mr2311L3YiY8KD3HShnSUQ'
        const { data } = await axios.post(url, payload)
        commit('setToken', data.idToken)
        commit('setUserEmail', payload.email)
        commit('clearMessage', null, { root: true })
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
    }
  },

  getters: {
    token (state) {
      return state.token
    },
    isAuthenticated (_, getters) {
      return !!getters.token
    },
    getUserEmail (state) {
      return state.userEmail
    }
  }
}
