<template>
<div v-if="showMiniMenu" class="mini-menu-container"></div>
<transition name="mini-menu-transition">
  <MiniMenu v-if="showMiniMenu" @darkModeToggle="darkModeToggle()" @hideMiniMenu="hideMiniMenu()"/>
</transition>
 <div class='search-div'>
        
        <div class='title-and-menu'>
              <router-link class="website-title" to="/">ANIME GETTER</router-link>
              <div id="nav">
                  <router-link class="menu-item" to="/">Home</router-link>
                  <router-link class="menu-item" to="/top">Top Anime</router-link>
                  <router-link class="menu-item" to="/seasonal">Seasonal</router-link>
                  <router-link class="menu-item" to="/schedule">Schedule</router-link>
              </div>
              <div class="search-and-mini-menu">
                <Font-awesome-icon :icon="awesomeIcons.faSearch" />
                <Font-awesome-icon @click="showMiniMenu = true" :icon="awesomeIcons.faBars" />
              </div>

              


       </div>
       <div class="search-toggle-container">
         <div class="dark-mode-toggle-switch">
           <Font-awesome-icon :icon="awesomeIcons.faSun" />
          <label class="switch" @change="darkModeToggle()">
            <input id="darkmode-checkbox" type="checkbox">
            <span class="slider round"></span>
          </label>
           <Font-awesome-icon :icon="awesomeIcons.faMoon" />
         </div>
         <div class="search-profile-container">
            <div id="search-dropdown-parent" class="search-dropdown-parent">
              <input type="text" id='search' :class="[{'search-input-focus':searchDropDown},'search-input']" v-model="userInput" autocomplete = 'off' @keydown.enter="sendSearch()" placeholder="Search Anime ..">
              <div v-if="searchDropDown==true" class="search-dropdown" tabindex="0"><SearchDropdown :searchResults='searchResults'/></div>
              <button class='search-button' v-on:click='getdata(), sendSearch()'><Font-awesome-icon :icon="awesomeIcons.faSearch" /></button>
          </div>
          <div v-if="isLoggedIn==true" id="profile-dropdown-parent" class="profile-dropdown-parent" tabindex="0" @click="profileDropDown = !profileDropDown, focusProfile()">
            <div class="profile-div" @click="focusProfile()"><Font-awesome-icon v-if="!PPURL" :icon="awesomeIcons.faUser" /><img v-else class="profile-picture" :src="PPURL" alt=""> <span style="margin: 0px 5px;">{{username}}</span><Font-awesome-icon :icon="awesomeIcons.faAngleDown" /> </div>
            <div v-if="profileDropDown==true" class="profile-dropdown" tabindex="0">
              <div class="profile-dropdown-element" @click="routeToProfile()"><Font-awesome-icon :icon="awesomeIcons.faUserAlt" /><span style="margin: 0px 5px;">Profile</span></div>
              <div class="profile-dropdown-element"><Font-awesome-icon :icon="awesomeIcons.faListAlt" /><span style="margin: 0px 5px;">Anime List</span></div>
              <div class="profile-dropdown-element" @click="logout()"><Font-awesome-icon :icon="awesomeIcons.faSignOutAlt" /><span style="margin: 0px 6px;">Logout</span></div>
            </div>
          </div>
           <div v-if="isLoggedIn===false" class="login-dropdown-container" id="login-dropdown-parent" tabindex="0" >
            <button class="website-login-button" @click="loginDropdown = !loginDropdown, focusLogin()">Login | Register</button>
            <div v-if="loginDropdown==true" class="login-dropdown" tabindex="0">
                <Logincomponent :small="true"/>
            </div>
           </div>
        </div>

         </div>
    </div>

  <router-view/>
  <button v-if="scrollCheck == true" class="scroll-up-button" @click="scrollUp()"><Font-awesome-icon :icon="awesomeIcons.faArrowUp"/></button>
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from './mixins/AnimeInfo_mixins'
import SearchDropdown from '@/components/SearchDropdown.vue'
import Logincomponent from '@/components/Logincomponent.vue'
import MiniMenu from '@/components/MiniMenu.vue'
import miniSearch from '@/components/miniSearch.vue'

import config from "./assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowUp, faSearch, faUser, faAngleDown, faSignOutAlt, faListAlt, faUserAlt, faBars} 
from '@fortawesome/free-solid-svg-icons'
import {db, auth, storage} from './firebase'


import { mapGetters } from 'vuex'

export default {

  components:{
        SearchDropdown,
        FontAwesomeIcon,
        Logincomponent,
        MiniMenu,
        miniSearch
    },

  data(){
    
    return{
      fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
      userInput:null,
      searchDropDown:false,
      timer:null,
      searchResults:null,
      darkMode:false,
      dark:'#FFFFFF',
      darker:'#F7F6FB',
      awesomeIcons: {faSun:faSun, faMoon:faMoon, faArrowUp:faArrowUp, faSearch:faSearch, faUser:faUser, faAngleDown:faAngleDown, faSignOutAlt:faSignOutAlt, faListAlt:faListAlt, faUserAlt:faUserAlt, faBars:faBars},
      scrollCheck:false,
      apiIP: ipServer,
      //userID:auth.currentUser.uid,
      profileDropDown:false,
      loginDropdown: false,
      showMiniMenu: false,
    }
  },
  mixins:[AnimeInfo_mixins],
  mounted(){
    document.title = 'Anime Getter'
    let searchTab = document.getElementById('search')
    searchTab.addEventListener('keydown',event=>{
      this.searchDropDown = true
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{this.animeSearch(this.userInput)},500)
    })
    searchTab.addEventListener('focus',event=>{
      if(this.userInput != '')
      {
        setTimeout(()=>{this.searchDropDown = true},200)
      }

    })
    let searchParent = document.getElementById('search-dropdown-parent')
    searchParent.addEventListener('focusout', event=> {
    if (searchParent.contains(event.relatedTarget)) {
        // don't react to this
        //console.log('ifffed')
        return;
    }
    //console.log('didnt if')
    this.searchDropDown = false  
  })

  document.addEventListener('scroll',event=>{
    window.scrollY >= 1500 ? this.scrollCheck = true : this.scrollCheck = false
    
  })
  auth.onAuthStateChanged((user) => {
  if (user) {
    //this.isLoggedIn = true
    this.$store.commit('changeLoggedIn',true)
    this.$store.commit('changeUsername',user.displayName)
    this.$store.commit('changePP',user.photoURL)
  } else {
    this.$store.commit('changeLoggedIn',false)
    //this.isLoggedIn = false
  }
  });
 
    if (localStorage.getItem('darkMode') == 'false'){
      this.darkMode = true
    }
    else{
      this.darkMode = false
      document.getElementById('darkmode-checkbox').checked = true
    }
    this.darkModeToggle()
  },
  methods:{
    getdata(){
        //  let trolllist = ['Domestic Girlfriend', 'Boku no Pico', 'Redo of a Healer', 'Ishozuku Reviewers', 'Naruto', 'One Piece', 'konosuba']
        //  const random = Math.floor(Math.random() * trolllist.length);
        //   this.userInput = trolllist[random]
      axios.get(`${this.apiIP}/anime?anime=${this.userInput}`)
      .then(response=> 
      {
        //console.log(response.data)
        let currentData = response.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.score
        this.fetcheddata.image = currentData.image_url
      //  this.fetcheddata.imagelink.setAttribute('href',OGanimeID)
      this.$store.commit('changeFetcheddata',this.fetcheddata)
     })

    },
    animeSearch(searchQuery){
      if(searchQuery.trim() != "" && searchQuery.trim().length > 2){
            //console.log('searching', 'search q = : ' + searchQuery)
            axios.get(`${ipServer}/search?q=${searchQuery.trim()}`)
            .then(response=> 
            {
              console.log(response.data)
              let temp = response.data
              this.searchResults = temp.filter(this.deleteHentai)
          }) 
      }
     
    },
    deleteHentai(anime){
        return anime.rated != "Rx"
    },
    sendSearch(){
      if(this.userInput.trim().length > 2)
      {
        this.$router.push({name:'Search Page',query:{q:this.userInput.trim()}})    
      }
  
    },
    focusProfile(){
      document.getElementById('profile-dropdown-parent').focus()
      let profileParent = document.getElementById('profile-dropdown-parent')
      profileParent.addEventListener('focusout', event=> {
      if (profileParent.contains(event.relatedTarget)) {
        // don't react to this
        //console.log('ifffed')
        return;
     }
    //console.log('didnt if')
    this.profileDropDown = false  
  })
    },
    focusLogin(){
      document.getElementById('login-dropdown-parent').focus()
      let loginParent = document.getElementById('login-dropdown-parent')
      loginParent.addEventListener('focusout', event=> {
      if (loginParent.contains(event.relatedTarget)) {
        // don't react to this
        //console.log('ifffed')
        return;
    }
    //console.log('didnt if')
    this.loginDropdown = false  
  })
    },
    darkModeToggle(){
      function setPropertyLeDocument(varName, value){
        document.documentElement.style.setProperty(varName, value)
      }
      if(this.darkMode == false)
      {
        
        setPropertyLeDocument('--main-bg-color','#1F1E1F')
        setPropertyLeDocument('--main-card-bg-color','#2D2C2D')
        setPropertyLeDocument('--main-text-color','#F3F3F3')
        setPropertyLeDocument('--main-button-bg-color','#2D2C2D')
        setPropertyLeDocument('--main-button-text-color','#F3F3F3')
        setPropertyLeDocument('--main-darkmode-icon-color','#FFFFFF')
        
        //console.log("should be dark")
        this.darkMode = true
        localStorage.setItem("darkMode",true)
      }
      else
      {
        
        setPropertyLeDocument('--main-bg-color','#F7F6FB')
        setPropertyLeDocument('--main-card-bg-color','#FFFFFF')
        setPropertyLeDocument('--main-text-color','#2c3e50')
        setPropertyLeDocument('--main-button-bg-color','#FFFFFF')
        setPropertyLeDocument('--main-button-text-color','#2c3e50')
        setPropertyLeDocument('--main-darkmode-icon-color','#1F1E1F')
        //console.log("should be light")
        this.darkMode = false
        localStorage.setItem("darkMode",false)

      }
      
    },
    scrollUp(){
      window.scrollTo({top:0,left:0,behavior:'smooth'}) 
      },
    logout(){
      //console.log('current user is: ' + auth.currentUser.email)
      auth.signOut()
      .then(()=>{
        //console.log('signed out ' + auth.currentUser)

      })
    },
    routeToProfile(){
      this.$router.push({name:'Profile Page'})            

    },
    hideMiniMenu(){
      this.showMiniMenu = false
    },
    consoling(){
      console.log("definitely logged out")
    }
  },
  watch:{

  },
  computed:{
    //...mapGetters(['userID'])
    username(){return this.$store.getters.usernameGetter},
    PPURL(){return this.$store.getters.PPGetter},
    isLoggedIn(){return this.$store.getters.isLoggedInGetter},
    //userLoggedin(){return this.$store.getters.loggedinUserGetter}
    
  }
}
</script>

<style>
@import './assets/nav.css';
</style>
