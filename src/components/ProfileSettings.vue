<template>
    <div class="profile-page-settings-container">
        <div class="profile-page-settings-title">Details:</div>
        <div class="profile-page-settings-details">
            <div>Gender: <select name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select></div>
            <div>Birthday: <input type="date" name="birthday"></div>
            <div>Nationality: <Nationalities/></div>
            <div>Location: </div>
            <input type="text">
            <div>First Anime: </div>
            <input type="text">
            <div>First Manga: </div>
            <input type="text">
            <div>Bio: </div>
            <textarea name="bio" cols="30" rows="10"></textarea>
            <div>Profile Picture: </div>
            <input type="file" name="profile-pic">
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