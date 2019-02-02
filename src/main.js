import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
import axios from 'axios'

// Plugins
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'

// plugin setup
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
Vue.use(Notifications)
Vue.use(SideBar)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

// configure store
const store = new Vuex.Store({
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

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

// axios config
axios.defaults.baseURL = ''

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
