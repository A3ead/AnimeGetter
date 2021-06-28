<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div class="profile-page-settings-profile-picture-div">Profile Picture: <img src="https://cdn.myanimelist.net/images/userimages/3936693.jpg?t=1624917000" alt="" srcset=""><input type="file" name="profile-pic"></div>
        
        <div class="profile-page-settings-details">
            <div>Gender: <select class="gender-selector" name="gender">
                <option class="gender-selector-option" value="Male">Male</option>
                <option class="gender-selector-option" value="Female">Female</option>
                <option class="gender-selector-option" value="Other">Other</option>
            </select>
            </div>
            <div>Birthday: <input type="date" class="date-selector" name="birthday"></div>
            <div>Nationality: <Nationalities/></div>
            <div>Location: </div>
            <input class="profile-page-settings-input-text" type="text">
            <div>First Anime: </div>
            <input class="profile-page-settings-input-text" type="text">
            <div>First Manga: </div>
            <input class="profile-page-settings-input-text" type="text">
            <div>Bio: </div>
            <textarea name="bio" cols="30" rows="10"></textarea>

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