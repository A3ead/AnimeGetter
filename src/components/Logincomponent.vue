<template>
<div :class="{'login-card-container': !small, 'login-card-container-small': small}">
  <div :class="{'login-card': !small, 'login-card-small': small}">
    <div :class="{'login-card-title': !small, 'login-card-title-small': small}">SIGN IN</div>
    <form class="login-form" @submit.prevent="login()" novalidate>
      <label :class="{'login-form-text': !small, 'login-form-text-small': small}" for="username-input">Username</label>
      <input :class="{'login-form-input': !small, 'login-form-input-small': small}" id="username-input" type="text" v-model="email">
      <label :class="{'login-form-text': !small, 'login-form-text-small': small}" for="password-input">Password</label>
      <input :class="{'login-form-input': !small, 'login-form-input-small': small}" id="password-input" type="password" v-model="password">
      <div :class="{'login-form-button-container': !small, 'login-form-button-container-small': small}">
        <div v-if="invalidUserOrPs" :class="{'login-error-div': !small, 'login-error-div-small': small}">Invalid username or password.</div>
        <button :class="{'login-button': !small, 'login-button-small': small}" type="submit">Sign in</button>
        <div>Not signed up? <span class="login-to-register" @click="$router.push({name:'Register Page'})">click here</span> to create an account!</div>
      </div>
    </form>
  </div>
 
</div>

</template>

<script>
import {auth, db} from '../firebase'

export default {
  name: 'Logincomponent',
    props: {
      small: null,
  },
  
  components: {
  },
    data(){
    return{
     email:'',
     password:'',
     invalidUserOrPs:false
    }
  },
  mounted(){

  },
  methods:{
      test(){

      },
      login(){
          let userinput = document.getElementById('username-input')
          userinput.type = 'email'
          let isemail = userinput.validity.valid
          //console.log(userinput.type, userinput.validity.valid)
          if (isemail == true && this.email != '')
          {
            auth
            .signInWithEmailAndPassword(this.email,this.password)
            .then(()=>{
                console.log('user logged in')

            })
            .catch(()=>{
              this.invalidUserOrPs = true
            })
          }
          else if (isemail == false && this.email != '')
          {

            db.collection('usernames').doc(this.email.toLowerCase()).get()
            .then((doc)=>{
              auth
              .signInWithEmailAndPassword(doc.data().Email,this.password)
              .then(()=>{
                 console.log('user logged in')

              })
              .catch(()=>{
                 this.invalidUserOrPs = true
               })
            })
            .catch(()=>{
              this.invalidUserOrPs = true
            })
          }

      }
  }
}
</script>