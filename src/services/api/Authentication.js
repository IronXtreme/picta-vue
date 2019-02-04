import axios from 'axios'
import { store } from '../../store/store'
import { userApi } from 'User'

export default {
  signIn (payload) {
    return axios.post('/api/account/Login', payload)
      .then(response => {
        if (undefined !== response.jwTtoken) {
          store.state.userToken = response.jwTtoken
        }

        store.state.user = userApi.getUser()
        if (undefined !== response.userId) {
          store.state.user.id = response.userId
        }

        return response.status === 200
      }).catch(error => console.log(error))
  },
  signUp (payload) {
    return axios.post('/api/account/SignUp', payload)
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  },
  signOut () {
    store.state.userToken = ''
    store.state.user = {
      id: '',
      name: '',
      email: '',
      username: '',
      emailIsConfirmed: '',
      phone: '',
      phoneIsConfirmed: ''
    }
  }
}
