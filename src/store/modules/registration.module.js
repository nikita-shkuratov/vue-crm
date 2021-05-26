import axios from 'axios'
import store from '../index'
import { error } from '../../helpers/error'
import { constants } from '../../constants/constants'

export default {
  namespaced: true,
  actions: {

    async reg (_, payload) {
      try {
        const { data } = await axios.post(constants.REG_FIRS, {
          email: payload.email,
          password: payload.password
        })

        const response = await axios.post(
          `${constants.REG_DB}${data.idToken}`,
          {
            payload
          }
        )

        await axios.put(
          `${constants.REG_ID}${response.data.name}.json?auth=${data.idToken}`,
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
