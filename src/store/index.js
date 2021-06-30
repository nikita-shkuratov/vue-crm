import { createStore } from 'vuex'
import axios from '../axios/request'
import auth from './modules/authorization.module'
import request from './modules/request.module'
import register from './modules/registration.module'
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
      try {
        const { data } = await axios.get(
          'https://www.nbrb.by/api/exrates/rates?periodicity=0'
        )
        const usd = data.find(c => c.Cur_Abbreviation === 'USD')
        const eur = data.find(c => c.Cur_Abbreviation === 'EUR')
        const byn = 1
        const curData = {
          base: 'RUB',
          date: usd.Date,
          rates: {
            USD: usd.Cur_OfficialRate,
            EUR: eur.Cur_OfficialRate,
            BYN: byn
          }
        }
        commit('setСurrencies', curData)
        return curData
      } catch (e) {
        console.log(e)
        const mocData = {
          base: 'RUB',
          date: Date(),
          rates: {
            USD: 0,
            EUR: 0,
            BYN: 1
          }
        }
        commit('setСurrencies', mocData)
        return mocData
      }
    },

    async updateMyBill ({ commit, state, rootState }, payload) {
      const user = state.user
      const token = rootState.auth.token
      try {
        const { data } = await axios.patch(
          `/users/${user.id}.json?auth=${token}`,
          {
            bill: payload
          }
        )
        commit('setUser', { ...user, ...data })
      } catch (e) {
        console.log(e)
      }
    },

    async loadUser ({ commit, state, rootState }) {
      const user = state.user
      const { token, userId } = rootState.auth

      try {
        const { data } = await axios.get(`/users/${userId}.json?auth=${token}`)
        commit('setUser', { ...user, ...data })
        return data
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
