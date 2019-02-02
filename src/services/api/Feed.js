import axios from 'axios'
import { store } from '../../store/store'

export default {
  get () {
    return axios.get('/api/feed/Get')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        return response.status === 200
      }).catch(error => console.log(error))
  },
  getTrending (payload) {
    return axios.get('/api/feed/GetTrending')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        return response.status === 200
      }).catch(error => console.log(error))
  },
  getLatest (payload) {
    return axios.get('/api/feed/GetLast')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        return response.status === 200
      }).catch(error => console.log(error))
  }
}
