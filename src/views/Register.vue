<template>
<div class="login-card-container">
  <div class="login-card">
    <div class="login-card-title">REGISTER</div>
    <form class="login-form" @submit.prevent="register()">
      <label class="login-form-text" for="email-input">Email</label>
      <input class="login-form-input" id="email-input" type="text" v-model="email">
      <label class="login-form-text" for="password-input">Password</label>
      <input class="login-form-input" id="password-input" type="password" v-model="password">
      <label class="login-form-text" for="username-input">Username</label>
      <input class="login-form-input" id="username-input" type="text" v-model="username">
      <div class="login-form-button-container">
        <button class="login-button" type="submit">Sign up</button>
      </div>
    </form>
  </div>
 
</div>

</template>

<script>
import {db, auth} from '../firebase'

export default {
  name: 'Register',
  
  components: {

  },
    data(){
    return{
     email:'',
     password:'',
     username:'',
     userID:''
     
    }
  },
  mounted(){
   
  },
  methods:{
      register(){
          auth
          .createUserWithEmailAndPassword(this.email,this.password)
          .then(()=>{
              this.userID = auth.currentUser.uid
              console.log('new user registered. userID = ' + this.userID)
              auth.currentUser.updateProfile({displayName:this.username})
              .then(()=>{
                this.$store.commit('changeUsername',auth.currentUser.displayName)
                })
              db
             // .firestore()
              .collection('users')
              .doc(this.userID)
              .set({Email:this.email, Password:this.password, Username:this.username})
              // .then(()=>{
              //     this.$store.commit('changeUserID',this.userID)
              //     this.$store.dispatch('getUsername')
              //     console.log('this is in register: ' + this.$store.state.userID)
              //  })
              //  .catch((error)=>{
              //    console.log('error in then of set')
              //    console.log(error)
              //  })
              db
              .collection('usernames')
              .doc(this.username)
              .set({Username:this.username, Email:this.email})
               })
        .catch((error)=>{
          console.log('catch error in register')
          console.log(error)
        })
                
      },
      addToDatabase(){
        db
        .firestore()
        .collection('users')
        .doc('testdoc')
        .set({Email:this.email, Password:this.password, Username:this.username, RegisterationDate:new Date()})
        
        
      }
  }
}
</script>