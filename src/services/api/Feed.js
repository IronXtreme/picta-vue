import axios from 'axios'

export default {
  get () {
    return axios.get('/api/feed/Get')
  },
  getTrending () {
    return axios.get('/api/feed/GetTrending')
  },
  getLatest () {
    return axios.get('/api/feed/GetLast')
  }
}
