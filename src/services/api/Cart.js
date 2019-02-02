import axios from 'axios'
import { store } from '../../store/store'

export default {
  get () {
    return axios.get('/api/cart/Get')
      .then(response => {
        store.state.cart = response

        return response.status === 200
      }).catch(error => console.log(error))
  },
  addItemToCart (payload) {
    return axios.post('/api/cart/AddItemToCart', payload)
      .then(response => {
        store.state.cart = response

        return response.status === 200
      }).catch(error => console.log(error))
  },
  removeItemFromCart (payload) {
    return axios.post('/api/cart/RemoveItemFromCart', payload)
      .then(response => {
        store.state.cart = response

        return response.status === 200
      }).catch(error => console.log(error))
  }
}
