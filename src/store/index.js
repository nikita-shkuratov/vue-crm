import { createStore } from 'vuex'
import auth from './modules/auth.module'
import request from './modules/request.module'
import register from './modules/reg.module'

export default createStore({
  state () {
    return {
      message: null
    }
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    },
    clearMessage (state) {
      state.message = null
    }
  },
  actions: {
    setMessage ({ commit }, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 2000)
    }
  },

  modules: {
    auth,
    request,
    register
  }
})
