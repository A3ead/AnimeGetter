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
import firebase from 'firebase'
import 'firebase/firestore';

export default {
  name: 'Register',
  
  components: {

  },
    data(){
    return{
     email:'',
     password:'',
     username:''
     
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
              firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({Email:this.email, Password:this.password, Username:this.username, RegisterationDate:new Date()})
               this.$store.commit('changeUserID',firebase.auth().currentUser.uid)
               console.log(this.$store.state.userID)
               })
                
      },
      addToDatabase(){
        firebase
        .firestore()
        .collection('users')
        .doc('testdoc')
        .set({Email:this.email, Password:this.password, Username:this.username, RegisterationDate:new Date()})
        
        
      }
  }
}
</script>