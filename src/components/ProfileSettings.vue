<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div>Profile Picture:</div>
        <div class="profile-page-settings-profile-picture-div"><img class="profile-page-settings-profile-picture" :src="imgURL" alt="" srcset=""><div style="margin-left: 5px;"><input class="profile-page-settings-input-image" type="file" name="profile-pic" size="50" @change="changePP"></div></div>
        <div class="profile-page-settings-details">
            <div class="settings-detail">Username:<input class="profile-page-settings-input-text" type="text" v-model="location"></div> 
            <div class="settings-detail">Gender: <select class="gender-selector" name="gender" v-model="gender">
                <option class="gender-selector-option" value="Male">Male</option>
                <option class="gender-selector-option" value="Female">Female</option>
                <option class="gender-selector-option" value="Other">Other</option>
            </select>
            </div>
            <div class="settings-detail">Birthday: <input type="date" class="date-selector" name="birthday" v-model="birthday"></div>
            <div class="settings-detail">Nationality: <Nationalities @getNationality="setNationality"></Nationalities></div>
            <div class="settings-detail">Location: <input class="profile-page-settings-input-text" type="text" v-model="location"></div> 
            <div class="settings-detail">First Anime: <input class="profile-page-settings-input-text" type="text" v-model="firstAnime"></div>  
            <div class="settings-detail">First Manga:  <input class="profile-page-settings-input-text" type="text" v-model="firstManga"></div> 
            <div class="settings-detail">Bio: <textarea class="profile-page-settings-input-textarea" name="bio" cols="30" rows="10" v-model="bio"></textarea></div>

        </div>
        <div style="display:flex; justify-content:center; width:100%"><button class="button" @click="applyChanges()">Apply</button></div>
        <div style="white-space:pre-wrap">{{test}}</div>
        <!-- <button @click="testing()">test</button> -->
    </div>
</template>


<script>

import Nationalities from '@/components/Nationalities.vue'
import {db, auth} from '../firebase'

export default {
  name: 'ProfileSettings',
  
  components: {
      Nationalities

  },
    data(){
    return{
        gender:'',
        birthday:'',
        nationality:'',
        location:'',
        firstAnime:'',
        firstManga:'',
        bio:'',
        userID:auth.currentUser.uid,
        //test:'',
        imgURL:'https://cdn.discordapp.com/attachments/672949321032925185/859435116183027762/Untitled-1.png'
    }
  },
  mounted(){
      
  },
  methods:{
      changePP(e){
          let uploadImage = e.target.files[0]
          this.imgURL = URL.createObjectURL(uploadImage)
      },
      setNationality(recievedNationality){
          this.nationality = recievedNationality
      },
      applyChanges(){
          db
          .collection('users')
          .doc(this.userID)
          .set({Gender:this.gender, Birthday:this.birthday, Nationality:this.nationality, Location:this.location, FirstAnime:this.firstAnime, FirstManga:this.firstManga, Bio:this.bio},{merge:true})
      },
    //   testing(){
    //       db.collection('users').doc(this.userID).get()
    //       .then((doc)=>{
    //           this.test = doc.data().Bio
    //       })
    //   }
  }
}
</script>