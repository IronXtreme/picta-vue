import axios from 'axios'
import { store } from '../../store/store'
import UserApi from './User'

export default {
  signIn (payload) {
    return axios.post('/api/account/Login', JSON.stringify(payload))
      .then(response => {
        if (undefined !== response.jwTtoken) {
          store.state.userToken = response.jwTtoken
        }

        store.state.user = UserApi.getUser()
          .then(response => {
            if (undefined !== response.userId) {
              store.state.user.id = response.userId
            }
          }).catch(error => console.log(error))
      }).catch(error => console.log(error))
  },
  signUp (payload) {
    return axios.post('/api/account/SignUp', JSON.stringify(payload))
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
