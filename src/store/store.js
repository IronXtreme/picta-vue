import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    userToken: localStorage.getItem('userToken') || '',
    user: {
      id: '',
      name: '',
      email: '',
      username: '',
      emailIsConfirmed: '',
      phone: '',
      phoneIsConfirmed: ''
    },
    cart: {
      items: {
        id: '',
        userId: '',
        authorId: '',
        tite: '',
        description: '',
        location: '',
        postedAt: '',
        priceIT: '',
        priceExcT: ''
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    isLoggedIn: state => !!state.userToken
  }
})
