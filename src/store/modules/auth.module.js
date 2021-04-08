import axios from 'axios'
import store from '../index'
import { constants } from '../../constants/constants'
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
    },
    logout (state) {
      state.token = null
      localStorage.removeItem('jwt-token')
    }
  },

  actions: {
    async login ({ commit, dispatch }, payload) {
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
