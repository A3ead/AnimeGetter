<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div class="profile-page-settings-profile-picture-div">Profile Picture: <img class="profile-page-settings-profile-picture" src="https://cdn.myanimelist.net/images/userimages/3936693.jpg?t=1624917000" alt="" srcset=""><input class="profile-page-settings-input-image" type="file" name="profile-pic"></div>
        
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
    }
  },
  mounted(){
   
  },
  methods:{

      
  }
}
</script>