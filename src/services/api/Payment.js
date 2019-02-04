import axios from 'axios'
import { store } from '../../store/store'

export default {
  charge (payload) {
    return axios.post('/api/payment/Charge')
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  }
}
