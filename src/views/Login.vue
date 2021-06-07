<template>
<div class="login-card-container">
  <div class="login-card">
    <div class="login-card-title">SIGN IN</div>
    <form class="login-form" @submit.prevent="login()">
      <label class="login-form-text" for="username-input">Username</label>
      <input class="login-form-input" id="username-input" type="text" v-model="email">
      <label class="login-form-text" for="password-input">Password</label>
      <input class="login-form-input" id="password-input" type="password" v-model="password">
      <div class="login-form-button-container">
        <button class="login-button" type="submit">Sign in</button>
        <div>Not signed up? <span class="login-to-register" @click="$router.push({name:'Register Page'})">click here</span> to create an account!</div>
      </div>
    </form>
  </div>
 
</div>

</template>


<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  
  components: {

  },
    data(){
    return{
     email:'',
     password:''
    }
  },
  mounted(){
   console.log(firebase.auth().currentUser)
  },
  methods:{
      login(){
          firebase
          .auth()
          .signInWithEmailAndPassword(this.email,this.password)
          .then(()=>{
              console.log('user logged in')
          })
      }
  }
}
</script>