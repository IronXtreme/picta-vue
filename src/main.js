import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
import { store } from 'store/store'

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

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

// axios config

/* axios.defaults.baseURL = 'https://pictalio-dev.azurewebsites.net' // 'http://localhost:5000' or 'https://pictalio-dev.azurewebsites.net'
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': store.state.userToken,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Headers': '*'
} */

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
