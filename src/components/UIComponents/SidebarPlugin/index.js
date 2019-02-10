import Sidebar from './SideBar.vue'
import { store } from '../../../store/store'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Acceuil',
      icon: 'ti-panel',
      path: '/admin/overview',
      logged: false
    },
    {
      name: 'Panier',
      icon: 'ti-shopping-cart',
      path: '/admin/notifications',
      logged: false
    },
    {
      name: 'Créer un compte',
      icon: 'ti-user',
      path: '/admin/signup',
      logged: false
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/admin/stats',
      logged: true
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list',
      logged: true
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography',
      logged: true
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons',
      logged: true
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps',
      logged: true
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications',
      logged: true
    }
  ],
  getActiveSidebarLinks () {
    var indexToSplice = []
    this.sidebarLinks.find((element, index) => {
      console.log(element)

      if (element.logged && !store.getters.isLoggedIn) {
        indexToSplice.push(index)
      }
    })

    indexToSplice.find((element, index) => {
      this.sidebarLinks.splice(element, 1)
    })
  },
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
