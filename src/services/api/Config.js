import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `https://pictalio-dev.azurewebsites.net`,
  headers: {
    'Content-Type': 'application/json'
  }
})
