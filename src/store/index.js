import { createStore } from 'vuex'
import axios from 'axios'
import auth from './modules/auth.module'
import request from './modules/request.module'
import register from './modules/reg.module'
import category from './modules/category.module'
import record from './modules/record.module'

export default createStore({
  state () {
    return {
      sidebar: false,
      user: {},
      currencies: null
    }
  },
  mutations: {
    setUser (state, userData) {
      state.user = userData
    },
    setСurrencies (state, currenciesData) {
      state.currencies = currenciesData
    },
    clearMessage (state) {
      state.message = null
    },
    openSidebar (state) {
      state.sidebar = true
    },
    closeSidebar (state) {
      state.sidebar = false
    }
  },

  actions: {
    setMessage (_, message) {
      if (!message.type) {
        // eslint-disable-next-line
        M.toast({ html: `Warning: ${message.value}` })
      } else {
        // eslint-disable-next-line
        M.toast({ html: message.value })
      }
    },
    async fetchCurrency ({ commit }) {
      const key = 'c2b1b5b18e71531c830cbd725569fcc0'
      try {
        const { data } = await axios.get(
          `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
        )
        commit('setСurrencies', data)
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async updateMyBill ({ commit, state, rootState }, payload) {
      const user = state.user
      const token = rootState.auth.token
      try {
        const {
          data
        } = await axios.patch(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users/${user.id}.json?auth=${token}`,
          { bill: payload }
        )
        commit('setUser', { ...user, ...data })
      } catch (e) {
        console.log(e)
      }
    }
  },

  modules: {
    auth,
    request,
    register,
    category,
    record
  },

  getters: {
    getUser (state) {
      return state.user
    },
    getСurrencies (state) {
      return state.currencies
    }
  }
})
