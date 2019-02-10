import { store } from '../../store/store'
import UserApi from './User'
import axios from 'axios'

export default {
  signIn (payload) {
    return axios.post('/api/account/Login', JSON.stringify(payload))
      .then(response => {
        if (undefined !== response.data.jwTtoken) {
          store.state.userToken = response.data.jwTtoken
          axios.defaults.headers.Authorization = response.data.jwTtoken
        }

        UserApi.getUser()
          .then(response => {
            store.state.user = response.data
          }).catch(error => console.log(error))
      }).catch(error => console.log(error))
  },
  signUp (payload) {
    console.log(JSON.stringify(payload))
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
    axios.defaults.headers.Authorization = ''
  }
}
