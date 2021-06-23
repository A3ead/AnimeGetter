<template>
    <div class="profile-page-container">
        <div class="profile-page-tab-selector-div">
            <button @click="currentTab='profile'" class="button-filter-no-border">Profile</button>
            <button @click="currentTab='settings'" class="button-filter-no-border">Settings</button>
        </div>
        <div v-if="firstTime" class="profile-page-firsttime-msg"> Welcome, you can enter more information about yourself here</div>
        <div v-if="currentTab=='profile'" class="profile-tab-user"></div>
        <div v-if="currentTab=='settings'" class="profile-tab-settings"></div>
    </div>


</template>


<script>


export default {
  name: 'Profile',
  
  components: {
      

  },
    data(){
    return{
        currentTab: 'profile',
        firstTime: this.$route.query.firstTime
    }
  },
  mounted(){
   console.log(this.firsttime)
  },
  methods:{

  }
}
</script>