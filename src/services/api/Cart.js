import axios from 'axios'
import { store } from '../../store/store'

export default {
  get () {
    return axios.get('/api/cart/Get')
      .then(response => {
        return response
      }).catch(error => console.log(error))
  },
  addItemToCart (payload) {
    return axios.post('/api/cart/AddItemToCart', payload)
      .then(response => {
        return response
      }).catch(error => console.log(error))
  },
  removeItemFromCart (payload) {
    return axios.get('/api/cart/RemoveItemFromCart')
      .then(response => {
        return response
      }).catch(error => console.log(error))
  }
}
