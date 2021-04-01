import axios from 'axios'
import { error } from '../../helpers/error'

export default {
  namespaced: true,
  state () {
    return { token: localStorage.getItem('jwt-token') || null }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    }
  },

  actions: {
    async reg ({ commit, dispatch }, payload) {
      try {
        const url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF1zsP6oJi3Mr2311L3YiY8KD3HShnSUQ'
        const { data } = await axios.post(url, payload)
        commit('setToken', data.idToken)
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
    }
  }
}
