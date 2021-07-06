<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div>Profile Picture:</div>
        <div class="profile-page-settings-profile-picture-div"><img class="profile-page-settings-profile-picture" :src="imgURL" alt="" srcset=""><img class="profile-picture" :src="imgURL" alt=""><div style="margin-left: 5px;"><input class="profile-page-settings-input-image" type="file" name="profile-pic" size="50" @change="changePP"></div></div>
        <div class="profile-page-settings-details">
            <div>    
                <div @keydown="usernameInputFired()" class="settings-detail"><div class="settings-detail-username-input-div">Username:
                    <div id="login-username-error-icon" class="login-error-icon"><div v-if="usernameIcon!=''"><Font-awesome-icon :icon="usernameIcon"/></div>
                        <div v-if="usernameErrorBubble==true && usernameIcon == awesomeIcons.faTimes" class="settings-error-icon-message">{{usernameErrorBubbleText}}</div>
                    </div>
                    </div>
                    <input class="profile-page-settings-input-text" type="text" v-model="username">
                </div>

            </div>


            <div class="settings-detail">Gender: <select class="gender-selector" name="gender" v-model="gender">
                <option class="gender-selector-option" value="Male">Male</option>
                <option class="gender-selector-option" value="Female">Female</option>
                <option class="gender-selector-option" value="Other">Other</option>
            </select>
            </div>
            <div class="settings-detail">Birthday: <input type="date" class="date-selector" name="birthday" v-model="birthday"></div>
            <div class="settings-detail">Nationality: <Nationalities @getNationality="setNationality" :nationality="nationality"></Nationalities></div>
            <div class="settings-detail">Location: <input class="profile-page-settings-input-text" type="text" v-model="location"></div> 
            <div class="settings-detail">First Anime: <input class="profile-page-settings-input-text" type="text" v-model="firstAnime"></div>  
            <div class="settings-detail">First Manga:  <input class="profile-page-settings-input-text" type="text" v-model="firstManga"></div> 
            <div class="settings-detail">Bio: <textarea class="profile-page-settings-input-textarea" name="bio" cols="30" rows="10" v-model="bio"></textarea></div>

        </div>
        <div style="display:flex; justify-content:center; width:100%"><button class="login-button" @click="applyChanges()" :disabled="applyDisabled==true">Apply</button></div>
        <!-- <div style="white-space:pre-wrap">{{test}}</div>
        <button @click="testing()">test</button> -->
    </div>
</template>


<script>

import Nationalities from '@/components/Nationalities.vue'
import checkingMixins from '../mixins/checking_mixins'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'
import {db, auth, storage} from '../firebase'

export default {
  name: 'ProfileSettings',
  
  components: {
    Nationalities,
    FontAwesomeIcon,

  },
    data(){
    return{
        uploadImage:null,
        username:'',
        gender:'',
        birthday:'',
        nationality:'',
        location:'',
        firstAnime:'',
        firstManga:'',
        bio:'',
        currentUsername:'',
        userID:auth.currentUser.uid,
        awesomeIcons: {faTimes:faTimes, faCheck:faCheck},
        //test:'',
        imgURL:'https://cdn.discordapp.com/attachments/672949321032925185/859435116183027762/Untitled-1.png',
        placeholderImgURL:'https://cdn.discordapp.com/attachments/672949321032925185/859435116183027762/Untitled-1.png'
    }
  },
  mounted(){
      db.collection('users').doc(this.userID).get()
      .then((doc)=>{
        this.username = doc.data().Username
        this.gender = doc.data().Gender
        this.birthday = doc.data().Birthday
        this.nationality = doc.data().Nationality
        this.location = doc.data().Location
        this.firstAnime = doc.data().FirstAnime
        this.firstManga = doc.data().FirstManga
        this.bio = doc.data().Bio
        this.currentUsername = this.username.toLowerCase()
        //console.log(doc.data())
      })
      if (!!auth.currentUser.photoURL) {
        this.imgURL = auth.currentUser.photoURL
      }
  },
  mixins:[checkingMixins],
  methods:{
      changePP(e){
          if (e.target.files[0].size <= 2097152){
            this.uploadImage = e.target.files[0]
            this.imgURL = URL.createObjectURL(this.uploadImage)
          }
          else {
            alert('PP too big')
          }

      },
      setNationality(recievedNationality){
          this.nationality = recievedNationality
      },
      applyChanges(){
          db
          .collection('users')
          .doc(this.userID)
          .set({Gender:this.gender, Birthday:this.birthday, Nationality:this.nationality, Location:this.location, FirstAnime:this.firstAnime, FirstManga:this.firstManga, Bio:this.bio},{merge:true})
          if (this.imgURL != this.placeholderImgURL) {
            storage
            .child(`ProfilePictures/${this.userID}`)
            .put(this.uploadImage).then((snapshot) => {
              snapshot.ref.getDownloadURL().then((url)=>{
                auth.currentUser.updateProfile({photoURL:url})
                this.$store.commit('changePP',url)

              })
              //console.log('Uploaded a blob or file!');
            });
          }
      },
    //   testing(){
    //       db.collection('users').doc(this.userID).get()
    //       .then((doc)=>{
    //           this.test = doc.data().Bio
    //       })
    //   }
  },
    computed:{
      applyDisabled: function(){
       if (this.usernameIcon != this.awesomeIcons.faTimes || this.username == '') {
         return false
       }
       else {
         return true
        }
      }
    }
}
</script>