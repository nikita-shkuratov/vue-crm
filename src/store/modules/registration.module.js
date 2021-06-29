import axios from '../../axios/request'
import store from '../index'
import { error } from '../../helpers/error'

export default {
  namespaced: true,
  actions: {

    async reg (_, payload) {
      try {
        const { data } = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF1zsP6oJi3Mr2311L3YiY8KD3HShnSUQ', {
          email: payload.email,
          password: payload.password
        })

        const response = await axios.post(
          `/users.json?auth=${data.idToken}`,
          {
            payload
          }
        )

        await axios.put(
          `/users/${response.data.name}.json?auth=${data.idToken}`,
          {
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            id: response.data.name,
            bill: 0
          }
        )

        store.dispatch('setMessage', {
          value: 'Registration was successful.',
          type: true
        })
      } catch (e) {
        store.dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: false
        })
        throw new Error()
      }
    }
  }
}
