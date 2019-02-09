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
        <input type="password" class="form-control" placeholder="mot de passe" name="password">
        <ul class="nav navbar-nav navbar-right">
          <li class="open">
            <a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-shopping-cart"></i>
              <p>Panier</p>
            </a>
          </li>
             <drop-down title="S'identifier" icon="ti-user">
               <li style="width: 300px;">
                 <div class="input-group">
                   <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                   <input v-model="username" id="email" type="text" class="form-control" name="email" placeholder="Email">
                 </div>
                 <div class="input-group">
                   <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                   <input id="password" v-model="password" type="password" class="form-control" name="password" placeholder="Password">
                 </div>
                 <!--<a href="#" @click="testSignUp()">SignUp Test</a>
                 <a href="#" @click="testSignIn()">Sign in</a>-->
                 <button class="btn" style="width: 100%; border-radius: 0;" type="button" id="login" @click="testSignIn(this)">Connexion</button>
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
          email: this.username,
          password: this.password
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
