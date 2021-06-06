<template>
<div class="login-card-container">
  <div class="login-card">
    <div class="login-card-title">REGISTER</div>
    <form class="login-form" @submit.prevent="register()">
      <label class="login-form-text" for="username-input">Username</label>
      <input class="login-form-input" id="username-input" type="text" v-model="email">
      <label class="login-form-text" for="password-input">Password</label>
      <input class="login-form-input" id="password-input" type="password" v-model="password">
      <div class="login-form-button-container">
        <button class="login-button" type="submit">Sign up</button>
      </div>
    </form>
  </div>
 
</div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  
  components: {

  },
    data(){
    return{
     email:'',
     password:'',
     
    }
  },
  mounted(){
   
  },
  methods:{
      register(){
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.email,this.password)
          .then(()=>{
              console.log('new user registered')
          })
      }
  }
}
</script>