import axios from 'axios'
import { store } from '../../store/store'

export default {
  getUser () {
    return axios.get('/api/account/GetMyInformations')
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  },
  updateUser (payload) {
    return axios.post('/api/account/UpdateUser', payload)
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  },
  getUserProfilePicture (payload) {
    return axios.get('/api/profile/GetUserProfilePicture') // @TODO IdUser to get specific user profile picture
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  addUserProfilePicture (payload) {
    return axios.post('/api/profile/AddUserProfilePicture', payload) // @TODO IdUser to add specific user profile picture
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  removeUserProfilePicture (payload) {
    return axios.post('/api/profile/RemoveUserProfilePicture', payload) // @TODO IdUser to remove specific user profile picture
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  getPortfolio (payload) {
    return axios.get('/api/profile/GetUserPictures') // @TODO IdUser to get specific user portfolio
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  getUserRank () {
    return axios.get('/api/ranking/GetUserRank') // @TODO IdUser to get specific user rank
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  }
}
