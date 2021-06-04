<template>
    <input type="text" v-model="email"> Username
    <input type="text" v-model="password"> Password
    <button @click="register()">Sign up</button>
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