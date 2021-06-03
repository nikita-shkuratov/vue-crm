import axios from '../../axios/request'
import store from '../index'
import { error } from '../../helpers/error'

export default {
  namespaced: true,
  state () {
    return {
      token: sessionStorage.getItem('jwt-token') || null,
      userId: sessionStorage.getItem('userId') || null
    }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
      sessionStorage.setItem('jwt-token', token)
    },
    setUserId (state, userId) {
      state.userId = userId
      sessionStorage.setItem('userId', userId)
    },
    logout (state) {
      state.token = null
      sessionStorage.removeItem('jwt-token')
      sessionStorage.removeItem('userId')
    }
  },

  actions: {
    async login ({ commit }, payload) {
      try {
        const { data } = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF1zsP6oJi3Mr2311L3YiY8KD3HShnSUQ', payload)
        commit('setToken', data.idToken)

        const responce = await axios.get(
          `/users.json?auth=${data.idToken}`
        )

        const user = Object.values(responce.data).filter(
          user => user.email === payload.email
        )[0]

        store.commit('setUser', user)
        commit('setUserId', user.id)
      } catch (e) {
        store.dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: false
        })
        throw new Error()
      }
    }
  },

  getters: {
    authorizationData (state) {
      return state
    },
    isAuthenticated (_, getters) {
      return !!getters.authorizationData.token
    }
  }
}
