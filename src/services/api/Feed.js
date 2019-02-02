import axios from 'axios'
import { store } from '../../store/store'

export default {
  get () {
    return axios.get('/api/feed/Get')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        if (undefined !== response.message) {
          return response.message
        }
      }).catch(error => console.log(error))
  },
  getTrending (payload) {
    return axios.get('/api/feed/GetTrending')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        if (undefined !== response.message) {
          return response.message
        }
      }).catch(error => console.log(error))
  },
  getLatest (payload) {
    return axios.get('/api/feed/GetLast')
      .then(response => {
        if (undefined !== response.cart) {
          store.state.cart = response
        }

        if (undefined !== response.message) {
          return response.message
        }
      }).catch(error => console.log(error))
  }
}
