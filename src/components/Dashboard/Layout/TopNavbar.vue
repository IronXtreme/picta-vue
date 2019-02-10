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
             <drop-down title="S'identifier" icon="ti-user" v-if="!$store.getters.isLoggedIn">
               <li class="login">
                 <form v-on:submit.prevent="signIn()">
                   <div class="input-group">
                     <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                     <input v-model="username" id="email" type="email" class="form-control" name="email" placeholder="Email">
                   </div>
                   <div class="input-group">
                     <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                     <input id="password" v-model="password" type="password" class="form-control" name="password" placeholder="Password">
                   </div>
                   <button class="btn" type="submit">Connexion</button>
                 </form>
               </li>
               <li>
                 <a class="text-center" href="#">Créer un nouveau compte</a>
               </li>
             </drop-down>
            <drop-down :title="$store.getters.user.userName" icon="ti-user" v-else>
              <li>
                <a href="#" @click="redirectProfile()">
                  <i class="glyphicon glyphicon-user"></i> Mon profil
                </a>
              </li>
              <li>
                <a href="#" @click="signOut()">
                  <i class="glyphicon glyphicon-off"></i> Déconnexion
                </a>
              </li>
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
        username: '',
        password: '',
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
      signIn () {
        let authObject = {
          email: this.username,
          password: this.password
        }
        AuthenticationApi.signIn(authObject)
          .then(response => {
            this.$notifications.notify(
              {
                message: 'Bonjour ' + this.username + '. Vous êtes bien connecté(e).',
                icon: 'ti-thumb-up',
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type: 'success'
              })
          }).catch(error => {
            this.$notifications.notify(
              {
                message: 'Vos identifiants sont incorrects.',
                icon: 'ti-thumb-down',
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type: 'danger'
              })
            console.log(error)
          })
      },
      signOut () {
        AuthenticationApi.signOut()
        this.$router.push('/')
      },
      redirectProfile () {
        this.$router.push('profile')
      }
    }
  }

</script>
<style>

</style>
