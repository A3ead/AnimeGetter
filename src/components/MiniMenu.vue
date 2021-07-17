<template>

    <div class="mini-menu-container" id="mini-menu-container" style="backdrop-filter: blur(0px); background: none;">
    <div style="width: 70%; background-color: blueviolet;">
        <div class="mini-menu" tabindex="0">
            <!-- <div class="mini-menu-profile-picture-container"><img class="mini-menu-profile-picture" :src="PPURL" alt="" srcset=""></div> -->
            <div v-if="isLoggedIn" class="mini-menu-profile-picture-container"><Font-awesome-icon v-if="!PPURL" :icon="awesomeIcons.faUser" /><img v-else class="mini-menu-profile-picture" :src="PPURL" alt=""> <span style="margin: 0px 5px; color: white;font-size: x-large;">{{username}}</span></div>
            <div v-else class="mini-menu-login-register-container">
             <div style="font-size: larger;text-align: center;font-weight: 500;letter-spacing: 1px;margin-bottom: 20px;">
               Welcome to AnimeGetter 
             </div>
             <div style=" display: flex;justify-content: space-evenly; ">
                <router-link @click="closeMiniMenu()" class="button" to="/login">Login</router-link>
                <router-link @click="closeMiniMenu()" class="button" to="/register">Register</router-link>
             </div>
             
            </div>
            <div class="mini-menu-items">
                <router-link @click="closeMiniMenu()" class="mini-menu-item" to="/">Home</router-link>
                <router-link @click="closeMiniMenu()" class="mini-menu-item" to="/top">Top Anime</router-link>
                <router-link @click="closeMiniMenu()" class="mini-menu-item" to="/seasonal">Seasonal</router-link>
                <router-link @click="closeMiniMenu()" class="mini-menu-item" to="/schedule">Schedule</router-link>
            </div>
            <div class="dark-mode-toggle-switch">
              <Font-awesome-icon :icon="awesomeIcons.faSun" />
              <label class="switch" @change="darkModeToggle()">
                <input id="darkmode-checkbox" type="checkbox">
                <span class="slider round"></span>
              </label>
              <Font-awesome-icon :icon="awesomeIcons.faMoon" />
            </div>
        </div>
        


    </div>
    </div>

</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowUp, faSearch, faUser, faAngleDown, faSignOutAlt, faListAlt, faUserAlt, faBars} 
from '@fortawesome/free-solid-svg-icons'


import Logincomponent from '@/components/Logincomponent.vue'

export default {
  name: 'miniMenu',
  
  components: {
        FontAwesomeIcon,
        Logincomponent
    

  },
    data(){
    return{
      awesomeIcons: {faSun:faSun, faMoon:faMoon, faArrowUp:faArrowUp, faSearch:faSearch, faUser:faUser, faAngleDown:faAngleDown, faSignOutAlt:faSignOutAlt, faListAlt:faListAlt, faUserAlt:faUserAlt, faBars:faBars},
    }
  },
  mounted(){
      document.getElementById("mini-menu-container").addEventListener('click', e => {
        if(e.target !== e.currentTarget){}
        else {this.$emit('hideMiniMenu')}
      });

      if (localStorage.getItem('darkMode') == 'true'){
        document.getElementById('darkmode-checkbox').checked = true
      }
  },
  methods:{
    closeMiniMenu(){
      this.$emit('hideMiniMenu')
    },
    darkModeToggle(){
      this.$emit('darkModeToggle')

    }
   
      
  },
  computed:{
    username(){return this.$store.getters.usernameGetter},
    PPURL(){return this.$store.getters.PPGetter},
    isLoggedIn(){return this.$store.getters.isLoggedInGetter},

  }
}
</script>