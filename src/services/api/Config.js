import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:5000`, // 'http://localhost:5000' or 'https://pictalio-dev.azurewebsites.net'
  headers: {
    'Content-Type': 'application/json'
  }
})
