import axios from 'axios'
import store from '../index'
import { constants } from '../../constants/constants'
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
        const { data } = await axios.post(constants.AUTH_USER, payload)
        commit('setToken', data.idToken)

        const responce = await axios.get(
          `${constants.AUTH_GET_USER}${data.idToken}`
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
