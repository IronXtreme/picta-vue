import axios from 'axios'

export default {
  getFeed () {
    return axios.get('/api/feed/get')
      .then(response => {
        return response.data
      })
  },
  getAFeed (id) {
    return axios.get('/api/feed/get/' + id)
      .then(response => {
        return response.data
      })
  }
}
