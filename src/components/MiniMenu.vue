<template>

    <div class="mini-menu-container" id="mini-menu-container" style="backdrop-filter: blur(0px); background: none;">
        
        <div class="mini-menu" tabindex="0">
            <!-- <div class="mini-menu-profile-picture-container"><img class="mini-menu-profile-picture" :src="PPURL" alt="" srcset=""></div> -->
            <div v-if="isLoggedIn" class="mini-menu-profile-picture-container"><Font-awesome-icon v-if="!PPURL" :icon="awesomeIcons.faUser" /><img v-else class="mini-menu-profile-picture" :src="PPURL" alt=""> <span style="margin: 0px 5px; color: white;font-size: x-large;">{{username}}</span></div>
            <div class="mini-menu-login-register-container">
              <button class="mini-menu-signin-button" style="border-right: 0.5px solid var(--main-card-bg-color); border-bottom: 2px solid var(--main-card-bg-color);">Login</button>
              <button class="mini-menu-signin-button" style="border-left: 0.5px solid var(--main-card-bg-color); border-bottom: 2px solid var(--main-card-bg-color);">Register</button>
            </div>
            <div class="mini-menu-items">
                <router-link class="mini-menu-item" to="/">Home</router-link>
                <router-link class="mini-menu-item" to="/top">Top Anime</router-link>
                <router-link class="mini-menu-item" to="/seasonal">Seasonal</router-link>
                <router-link class="mini-menu-item" to="/schedule">Schedule</router-link>
            </div>

        </div>




    </div>

</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowUp, faSearch, faUser, faAngleDown, faSignOutAlt, faListAlt, faUserAlt, faBars} 
from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'miniMenu',
  
  components: {
        FontAwesomeIcon,
    
    

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
  },
  methods:{
   
      
  },
  computed:{
    username(){return this.$store.getters.usernameGetter},
    PPURL(){return this.$store.getters.PPGetter},
    isLoggedIn(){return this.$store.getters.isLoggedInGetter},

  }
}
</script>