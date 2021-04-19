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
      message: null,
      sidebar: false,
      user: {},
      bill: null,
      myBill: 10000
    }
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    },
    setUser (state, userData) {
      state.user = userData
    },
    setBill (state, billData) {
      state.bill = billData
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
    setMessage ({ commit }, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 2000)
    },
    async fetchCurrency ({ commit }) {
      const key = 'c2b1b5b18e71531c830cbd725569fcc0'
      const { data } = await axios.get(
        `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
      )
      commit('setBill', data)
      return data
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
    getBill (state) {
      return state.bill
    },
    getMyBill (state) {
      return state.myBill
    }
  }
})
