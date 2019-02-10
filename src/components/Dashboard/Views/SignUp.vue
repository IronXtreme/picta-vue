<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Informations de compte</h4>
    </div>
    <div class="content">
      <form  v-on:submit.prevent="createAccount()">
        <div class="row">
          <div class="col-md-5">
            <fg-input type="email"
                      label="Email *"
                      required="true"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="Prénom *"
                      required="true"
                      placeholder="Prénom"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="test"
                      label="Nom *"
                      required="true"
                      placeholder="Nom"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="password"
                      label="Mot de passe *"
                      required="true"
                      pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                      placeholder="Mot de passe"
                      v-model="user.password">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="password"
                      label="Confirmation du mot de passe *"
                      required="true"
                      :pattern="user.password"
                      placeholder="Mot de passe"
                      v-model="user.confirmPassword">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="tel"
                      label="N° de téléphone *"
                      required="true"
                      placeholder="N° de téléphone"
                      pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
                      v-model="user.phoneNumber">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="date"
                      label="Date de naissance *"
                      required="true"
                      placeholder="Date de naissance"
                      v-model="user.birthDate">
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd">
            S'enregistrer
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import AuthenticationApi from '../../../services/api/Authentication'

  export default {
    components: {
      AuthenticationApi
    },
    name: 'sign-up',
    data () {
      return {
        user: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
          birthDate: '',
          birth: ''
        }
      }
    },
    methods: {
      createAccount () {
        let date = new Date(this.user.birthDate)
        this.user.birth = date.getDay().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString()
        AuthenticationApi.signUp(this.user)
          .then(response => {
            console.log(response)
          }).catch(error => console.log(error))
      }
    }
  }

</script>
<style>

</style>
