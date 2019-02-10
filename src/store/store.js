import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    userToken: localStorage.getItem('userToken') || '',
    user: {
      id: '',
      name: '',
      email: '',
      userName: '',
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
  plugins: [createPersistedState()],
  mutations: {
    increment (state) {
      state.count++
    },
    updateUser (state, user) {
      state.user = user
    },
    updateUserToken (state, userToken) {
      state.userToken = userToken
    },
    updateCart (state, cart) {
      state.cart = cart
    }
  },
  getters: {
    isLoggedIn: state => !!state.userToken,
    user: state => state.user
  }
})
