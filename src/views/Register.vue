<template>
<div class="login-card-container">
  <div class="login-card">
    <div class="login-card-title">REGISTER</div>
    <form class="login-form" @submit.prevent="register()" novalidate>
      <label class="login-form-text" for="email-input">Email
        <div id="login-email-error-icon" class="login-error-icon"><div v-if="emailIcon!=''"><Font-awesome-icon :icon="emailIcon"/></div>
          <div v-if="emailErrorBubble==true && emailIcon == awesomeIcons.faTimes" class="login-error-icon-message">{{emailErrorBubbleText}}</div>
        </div>
      </label>
      <input @keydown="emailInputFired()" class="login-form-input" id="email-input" type="email" v-model="email">
      <label class="login-form-text" for="username-input">Username
        <div id="login-username-error-icon" class="login-error-icon"><div v-if="usernameIcon!=''"><Font-awesome-icon :icon="usernameIcon"/></div>
          <div v-if="usernameErrorBubble==true && usernameIcon == awesomeIcons.faTimes" class="login-error-icon-message">{{usernameErrorBubbleText}}</div>
        </div>
      </label>
      <input @keydown="usernameInputFired()" class="login-form-input" id="username-input" type="text" v-model="username">
      <label class="login-form-text" for="password-input">Password
        <div id="login-password-error-icon" class="login-error-icon"><div v-if="passwordIcon!=''"><Font-awesome-icon :icon="passwordIcon"/></div>
          <div v-if="passwordErrorBubble==true && passwordIcon == awesomeIcons.faTimes" class="login-error-icon-message">{{passwordErrorBubbleText}}</div>
        </div>
      </label>
      <input @keydown="passwordInputFired()" class="login-form-input" id="password-input" type="password" v-model="password">
      <label class="login-form-text" for="passwordR-input">Repeat Password 
        <div id="login-passwordR-error-icon" class="login-error-icon"><div v-if="passwordRIcon!=''"><Font-awesome-icon :icon="passwordRIcon"/></div>
          <div v-if="passwordRErrorBubble==true && passwordRIcon == awesomeIcons.faTimes" class="login-error-icon-message">{{passwordRErrorBubbleText}}</div>
        </div>
      </label>
      <input @keydown="passwordRInputFired()" class="login-form-input" id="passwordR-input" type="password" v-model="passwordR">
      <div class="login-form-button-container">
        <button class="login-button" type="submit" :disabled="SignupDisabled==true">Sign up</button>
      </div>
    </form>
  </div>
 
</div>

</template>

<script>
import {db, auth} from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Register',
  
  components: {
    FontAwesomeIcon,
  },
    data(){
    return{
     email:'',
     emailLowerCase:'',
     password:'',
     passwordR:'',
     username:'',
     userID:'',
     usernameDB:'',
     awesomeIcons: {faTimes:faTimes, faCheck:faCheck},
     emailIcon:'', usernameIcon:'', passwordIcon:'', passwordRIcon:'',
     emailErrorBubbleText:'',usernameErrorBubbleText:'',passwordErrorBubbleText:'',passwordRErrorBubbleText:'',
     emailErrorBubble:false,usernameErrorBubble:false,passwordErrorBubble:false,passwordRErrorBubble:false,
     timer:null,
     
    }
  },
  mounted(){
    let emailErrorIcon = document.getElementById('login-email-error-icon')
    let usernameErrorIcon = document.getElementById('login-username-error-icon')
    let passwordErrorIcon = document.getElementById('login-password-error-icon')
    let passwordRErrorIcon = document.getElementById('login-passwordR-error-icon')

    emailErrorIcon.addEventListener('mouseover', event=>{this.emailErrorBubble = true})
    emailErrorIcon.addEventListener('mouseout', event=>{this.emailErrorBubble = false})
    usernameErrorIcon.addEventListener('mouseover', event=>{this.usernameErrorBubble = true})
    usernameErrorIcon.addEventListener('mouseout', event=>{this.usernameErrorBubble = false})
    passwordErrorIcon.addEventListener('mouseover', event=>{this.passwordErrorBubble = true})
    passwordErrorIcon.addEventListener('mouseout', event=>{this.passwordErrorBubble = false})
    passwordRErrorIcon.addEventListener('mouseover', event=>{this.passwordRErrorBubble = true})
    passwordRErrorIcon.addEventListener('mouseout', event=>{this.passwordRErrorBubble = false})

  },
  methods:{
      emailInputFired(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{this.checkEmail()},500)
      },
      usernameInputFired(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{this.checkUsername()},500)
      },
      passwordInputFired(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{this.checkPassword(), this.checkPasswordR()},500) 
      },
      passwordRInputFired(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{this.checkPasswordR()},500) 
      },

      checkEmail(){
        this.email = this.email.trim()
        if (this.email == ''){
          this.emailErrorBubbleText = 'Please enter an email address'
          this.emailIcon = this.awesomeIcons.faTimes
        }
        else {
          let emailInput = document.getElementById('email-input')
          if (emailInput.validity.valid != true){
            this.emailErrorBubbleText = 'Please enter a valid email address'
            this.emailIcon = this.awesomeIcons.faTimes
            }
          else {
            this.emailLowerCase = this.email.toLowerCase()
            db.collection('emails').doc(this.emailLowerCase).get()
            .then((doc)=>{
              if(doc.exists){
                this.emailErrorBubbleText = 'An account with this email is already registered'
                this.emailIcon = this.awesomeIcons.faTimes
              }
              else {
                this.emailIcon = this.awesomeIcons.faCheck
              }
            })
           }
        }
      },
      checkUsername(){
        console.log(`Checking user name {${this.username}}`)
        this.username = this.username.trim()
        if (this.username == ''){
        this.usernameErrorBubbleText = 'Please enter a username'
        this.usernameIcon = this.awesomeIcons.faTimes
        }
        else {
        // console.log('original username is: '+ this.username)
          this.usernameDB = this.username.replace(/\s+/g, '').toLowerCase()
        // console.log("trimmed username is: " + this.usernameDB)
          let regexUsername = /^\w+$/
          if (!regexUsername.test(this.usernameDB)){
            this.usernameErrorBubbleText = 'Username may only contain letters,  numbers, and underscores ( _ )'
            this.usernameIcon = this.awesomeIcons.faTimes
          }
          else if (this.username.length > 16){
            this.usernameErrorBubbleText = 'Username can have a maximum of 16 characters'
            this.usernameIcon = this.awesomeIcons.faTimes
          }
          else if (this.usernameDB.length < 3){
            this.usernameErrorBubbleText = 'Username can have a minimum of 3 characters'
            this.usernameIcon = this.awesomeIcons.faTimes
          }
          else {
            db.collection('usernames').doc(this.usernameDB).get()
            .then((doc)=>{
              if (doc.exists){
                this.usernameErrorBubbleText = 'An account with this username already exists'
                this.usernameIcon = this.awesomeIcons.faTimes
              }
              else {
                this.usernameIcon = this.awesomeIcons.faCheck
              }
            })
          }
        }
      },
      checkPassword(){
        if (this.password == ''){
          this.passwordErrorBubbleText = 'Please enter a password'
          this.passwordIcon = this.awesomeIcons.faTimes
        }
        else {
          let regexPassword = /[A-Z].*\d|\d.*[A-Z]/
          if (this.password.length < 8){
          this.passwordErrorBubbleText = 'Password must have at least 8 characters'
          this.passwordIcon = this.awesomeIcons.faTimes
          }
          else if (regexPassword.test(this.password) == false){
            this.passwordErrorBubbleText = 'Password must contain at least one uppercase letter and one number'
            this.passwordIcon = this.awesomeIcons.faTimes
          }
          else if (/^\s|\s$/.test(this.password)){
            this.passwordErrorBubbleText = 'Password can not start or end with space'
            this.passwordIcon = this.awesomeIcons.faTimes
          }
          else {
            this.passwordIcon = this.awesomeIcons.faCheck
          }
        }
      },
      checkPasswordR(){
        if (this.passwordR == ''){
          this.passwordRErrorBubbleText = 'Please repeat your password'
          this.passwordRIcon = this.awesomeIcons.faTimes
        }
        else {
          if(this.passwordR != this.password){
          this.passwordRErrorBubbleText = "Repeated password doesn't match"
          this.passwordRIcon = this.awesomeIcons.faTimes
          }
          else {
            this.passwordRIcon = this.awesomeIcons.faCheck
          }
        }
      },
      register(){
        if (!this.SignupDisabled) {
          auth
          .createUserWithEmailAndPassword(this.emailLowerCase,this.password)
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
              .doc(this.usernameDB)
              .set({Username:this.usernameDB, Email:this.emailLowerCase})
              db
              .collection('emails')
              .doc(this.emailLowerCase)
              .set({exists:true})

              this.$router.push({name:'Profile Page',query:{firstTime:true}, params:{tab:'settings'}}) 
          })    
          .catch((error)=>{
            console.log('catch error in register')
            console.log(error)
          })
        }
      },
      addToDatabase(){
        db
        .firestore()
        .collection('users')
        .doc('testdoc')
        .set({Email:this.email, Password:this.password, Username:this.username, RegisterationDate:new Date()})
          
      }
  },
  computed:{
    SignupDisabled: function(){
     if (this.emailIcon == this.awesomeIcons.faCheck && this.usernameIcon == this.awesomeIcons.faCheck && this.passwordIcon == this.awesomeIcons.faCheck && this.passwordRIcon == this.awesomeIcons.faCheck) {
       return false
     }
     else {
       return true
      }
    }
  }
}
</script>