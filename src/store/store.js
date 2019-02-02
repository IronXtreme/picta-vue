import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    userToken: localStorage.getItem('userToken') || '',
    user: {}
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
