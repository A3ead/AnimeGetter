<template>
    <div class="profile-page-container">
        <div class="profile-page-tab-selector-div">
            <button @click="currentTab='profile',highlightFilter('profile')" class="button-filter-no-border" id="profile">Profile</button>
            <button @click="currentTab='settings',highlightFilter('settings')" class="button-filter-no-border" id="settings">Settings</button>
        </div>
       
        <div v-if="currentTab=='profile'" class="profile-tab-user"></div>
        <div v-if="currentTab=='settings'" class="profile-tab-settings">
            <div class="profile-page-card">
                <div v-if="firstTime" class="profile-page-firsttime-msg">Welcome, you can enter more information about yourself here</div>
                <ProfileSettings/>
            </div>
            
        </div>
    </div>


</template>


<script>

import ProfileSettings from '@/components/ProfileSettings.vue'

export default {
  name: 'Profile',
  
  components: {
      ProfileSettings
      

  },
    data(){
    return{
        currentTab: this.$route.params.tab || 'profile',
        firstTime: this.$route.query.firstTime
    }
  },
  mounted(){
  },
  methods:{
    highlightFilter(filterID){
      try {
          document.getElementsByClassName('button-filter-no-border-selected')[0].className = 'button-filter-no-border'
      }
      catch {
        
      }
      finally {
          document.getElementById(filterID).classList.add('button-filter-no-border-selected')
      }
      }
  }
}
</script>