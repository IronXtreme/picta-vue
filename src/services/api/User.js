import axios from 'axios'
import { store } from '../../store/store'

export default {
  getUser () {
    return axios.get('/api/account/GetMyInformations')
      .then(response => {
        return response
      }).catch(error => console.log(error))
  },
  updateUser (payload) {
    return axios.post('/api/account/UpdateUser', payload)
      .then(response => {
        if (undefined !== response.message) {
          return true
        }

        return false
      }).catch(error => console.log(error))
  }
}
