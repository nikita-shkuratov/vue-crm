import axios from 'axios'
import { error } from '../../helpers/error'
import { constants } from '../../constants/constants'

export default {
  namespaced: true,
  actions: {
    async reg ({ dispatch }, payload) {
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
          { ...payload, id: response.data.name }
        )
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
  }
}
