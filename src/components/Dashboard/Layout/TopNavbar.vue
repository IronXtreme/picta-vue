<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
          <li class="open">
            <a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-shopping-cart"></i>
              <p>Panier</p>
            </a>
          </li>
             <drop-down title="S'identifier" icon="ti-user">
               <li><a href="#"></a></li>
             </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import AuthenticationApi from '../../../services/api/Authentication'
  export default {
    components: {
      AuthenticationApi
    },
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      testSignUp () {
        let authObject = {
          email: 'thomaslavigne47555@gmail.com',
          password: 'ceciestuntest33',
          confirmPassword: 'ceciestuntest33',
          firstName: 'Thomas',
          lastName: 'Lavigne',
          phoneNumber: '0781707140',
          birth: '02/12/1997'
        }
        AuthenticationApi.signUp(authObject)
          .then(response => {
            console.log(response)
          }).catch(error => console.log(error))
      },
      testSignIn () {
        let authObject = {
          email: 'thomaslavigne47555@gmail.com',
          password: 'ceciestuntest33'
        }
        AuthenticationApi.signIn(authObject)
          .then(response => {
            console.log(response)
          }).catch(error => console.log(error))
      }
    }
  }

</script>
<style>

</style>
