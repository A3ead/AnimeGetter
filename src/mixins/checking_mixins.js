import {db, auth} from '../firebase'


export default {
      data(){
        return{
        timer:null,
        emailIcon:'', usernameIcon:'', passwordIcon:'', passwordRIcon:'',
        emailErrorBubbleText:'',usernameErrorBubbleText:'',passwordErrorBubbleText:'',passwordRErrorBubbleText:'',
        emailErrorBubble:false,usernameErrorBubble:false,passwordErrorBubble:false,passwordRErrorBubble:false,
        }
    },
    mounted(){
      let usernameErrorIcon = document.getElementById('login-username-error-icon')
      usernameErrorIcon.addEventListener('mouseover', event=>{this.usernameErrorBubble = true})
      usernameErrorIcon.addEventListener('mouseout', event=>{this.usernameErrorBubble = false})
    },

    methods:{
        usernameInputFired(){
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{this.checkUsername()},500)
          },

          checkUsername(){
            console.log(`Checking user name {${this.username}}`)
            this.username = this.username.trim()
            if (this.username == ''){
            this.usernameErrorBubbleText = 'Please enter a username or leave empty to keep old'
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
    },


}