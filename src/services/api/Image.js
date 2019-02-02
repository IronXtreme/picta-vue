import axios from 'axios'
import { store } from '../../store/store'

export default {
  deleteImage (payload) {
    return axios.delete('/api/images/DeleteImage') // @TODO add the image ID and user ID
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  },
  updateImage (payload) {
    return axios.post('/api/images/UpdateImage', payload)
      .then(response => {
        return response.status === 200
      }).catch(error => console.log(error))
  },
  getImageRank (payload) {
    return axios.get('/api/ranking/GetRank')  // @TODO add the image ID
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  rankImage (payload) {
    return axios.post('/api/ranking/RankImage', payload)
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  blurImage (payload) {
    return axios.post('/api/upload/Blur', payload)
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  },
  uploadImage (payload) {
    return axios.post('/api/upload/Post', payload)
      .then(response => {
        return response.status === 200 ? response : false
      }).catch(error => console.log(error))
  }
}
