<template>
    <input type="text" v-model="email"> Username
    <input type="text" v-model="password"> Password
    <button @click="login()">Sign in</button>
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