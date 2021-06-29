<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div>Profile Picture:</div>
        <div class="profile-page-settings-profile-picture-div"><img class="profile-page-settings-profile-picture" :src="imgURL" alt="" srcset=""><div style="margin-left: 5px;"><input class="profile-page-settings-input-image" type="file" name="profile-pic" size="50" @change="changePP"></div></div>
        <div class="profile-page-settings-details">
            <div class="settings-detail">Gender: <select class="gender-selector" name="gender">
                <option class="gender-selector-option" value="Male">Male</option>
                <option class="gender-selector-option" value="Female">Female</option>
                <option class="gender-selector-option" value="Other">Other</option>
            </select>
            </div>
            <div class="settings-detail">Birthday: <input type="date" class="date-selector" name="birthday"></div>
            <div class="settings-detail">Nationality: <Nationalities/></div>
            <div class="settings-detail">Location: <input class="profile-page-settings-input-text" type="text"></div> 
            <div class="settings-detail">First Anime: <input class="profile-page-settings-input-text" type="text"></div>  
            <div class="settings-detail">First Manga:  <input class="profile-page-settings-input-text" type="text"></div> 
            <div class="settings-detail">Bio: <textarea class="profile-page-settings-input-textarea" name="bio" cols="30" rows="10"></textarea></div>
            

        </div>
    </div>
</template>


<script>

import Nationalities from '@/components/Nationalities.vue'

export default {
  name: 'ProfileSettings',
  
  components: {
      Nationalities

  },
    data(){
    return{
        imgURL:'https://cdn.discordapp.com/attachments/672949321032925185/859435116183027762/Untitled-1.png'
    }
  },
  mounted(){
      
  },
  methods:{
      changePP(e){
          let uploadImage = e.target.files[0]
          this.imgURL = URL.createObjectURL(uploadImage)
      }
      
  }
}
</script>