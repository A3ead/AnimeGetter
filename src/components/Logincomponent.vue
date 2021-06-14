<template>
<div :class="{'login-card-container': !small, 'login-card-container-small': small}">
  <div :class="{'login-card': !small, 'login-card-small': small}">
    <div :class="{'login-card-title': !small, 'login-card-title-small': small}">SIGN IN</div>
    <form class="login-form" @submit.prevent="login()">
      <label :class="{'login-form-text': !small, 'login-form-text-small': small}" for="username-input">Username</label>
      <input :class="{'login-form-input': !small, 'login-form-input-small': small}" id="username-input" type="text" v-model="email">
      <label :class="{'login-form-text': !small, 'login-form-text-small': small}" for="password-input">Password</label>
      <input :class="{'login-form-input': !small, 'login-form-input-small': small}" id="password-input" type="password" v-model="password">
      <div :class="{'login-form-button-container': !small, 'login-form-button-container-small': small}">
        <button :class="{'login-button': !small, 'login-button-small': small}" type="submit">Sign in</button>
        <div>Not signed up? <span class="login-to-register" @click="$router.push({name:'Register Page'})">click here</span> to create an account!</div>
      </div>
    </form>
  </div>
 
</div>

</template>

<script>
import firebase from 'firebase'


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