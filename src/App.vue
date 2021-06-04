<template>
 <div class='search-div'>
        <div class='title-and-menu'>
            <router-link class="website-title" to="/">ANIME GETTER</router-link>
              <div id="nav">
                  <router-link class="menu-item" to="/">Home</router-link>
                  <router-link class="menu-item" to="/top">Top Anime</router-link>
                  <router-link class="menu-item" to="/seasonal">Seasonal</router-link>
                  <router-link class="menu-item" to="/schedule">Schedule</router-link>
                  <router-link class="menu-item" to="/register">Register</router-link>
                  <router-link class="menu-item" to="/login">Sign in</router-link>
              </div>
        </div>
        <div class="search-toggle-container">
         <div class="dark-mode-toggle-switch">
           <Font-awesome-icon :icon="faSun" />
          <label class="switch" @change="darkModeToggle()">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
           <Font-awesome-icon :icon="faMoon" />
         </div>
          <div id="search-dropdown-parent">
            <input type="text" id='search' :class="[{'search-input-focus':searchDropDown},'search-input']" v-model="userInput" autocomplete = 'off' @keydown.enter="sendSearch()" placeholder="Search Anime ..">
            <div v-if="searchDropDown==true" class="search-dropdown" tabindex="0"><SearchDropdown :searchResults='searchResults'/></div>
            <button class='button' v-on:click='getdata(), sendSearch()'>Search</button>
          </div>
        </div>

    </div>

  <router-view/>
  <button v-if="scrollCheck == true" class="scroll-up-button" @click="scrollUp()"><Font-awesome-icon :icon="faArrowUp"/></button>
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from './mixins/AnimeInfo_mixins'
import SearchDropdown from '@/components/SearchDropdown.vue'
import config from "./assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default {

  components:{
        SearchDropdown,
        FontAwesomeIcon,
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
      faSun: faSun,
      faMoon: faMoon,
      faArrowUp: faArrowUp,
      scrollCheck:false,
      apiIP: ipServer,
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
            axios.get(`${this.apiIP}/search?q=${searchQuery.trim()}`)
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
        
        console.log("should be dark")
        this.darkMode = true
      }
      else
      {
        
        setPropertyLeDocument('--main-bg-color','#F7F6FB')
        setPropertyLeDocument('--main-card-bg-color','#FFFFFF')
        setPropertyLeDocument('--main-text-color','#2c3e50')
        setPropertyLeDocument('--main-button-bg-color','#FFFFFF')
        setPropertyLeDocument('--main-button-text-color','#2c3e50')
        setPropertyLeDocument('--main-darkmode-icon-color','#1F1E1F')
        console.log("should be light")
        this.darkMode = false
      }
      
    },
    scrollUp(){
      window.scrollTo({top:0,left:0,behavior:'smooth'}) 
      }
  }
}
</script>

<style>


#nav {
  padding: 30px;
}

#nav a {
  margin-left: 1px;
  padding: 20px;
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.205);
  margin-left: 0px;
  margin-right: 14px;
  border: solid 1px #FFFFFF;
  border-radius: 5px;
}

#nav a:hover{
  background-color: rgba(255, 255, 255, 0.411);
  margin-left: 0px;
  margin-right: 14px;
  border: solid 1px #ffffff;
  border-radius: 5px;

}

</style>
