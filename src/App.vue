<template>
 <div class='search-div'>
        <div class='title-and-menu'>
            <router-link class="website-title" to="/">ANIME GETTER</router-link>
              <div id="nav">
                  <router-link class="menu-item" to="/">Home</router-link>
                  <router-link class="menu-item" to="/top">Top Anime</router-link>
                  <router-link class="menu-item" to="/seasonal">Seasonal</router-link>
                  <router-link class="menu-item" to="/schedule">Schedule</router-link>
              </div>
        </div>
        <button @click="darkModeToggle()">Dark Mode</button>
        <div>
          <div id="search-dropdown-parent">
            <input type="text" id='search' :class="[{'search-input-focus':searchDropDown},'search-input']" v-model="userInput" autocomplete = 'off' @keydown.enter="sendSearch()" placeholder="Search Anime ..">
            <div v-if="searchDropDown==true" class="search-dropdown" tabindex="0"><SearchDropdown :searchResults='searchResults'/></div>
            <button class='button' v-on:click='getdata(), sendSearch()'>Search</button>
          </div>
        </div>

    </div>

  <router-view/>
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from './mixins/AnimeInfo_mixins'
import SearchDropdown from '@/components/SearchDropdown.vue'

export default {

  components:{
        SearchDropdown
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
      darker:'#F7F6FB'
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
  });
    
    
  },
  methods:{
    getdata(){
        //  let trolllist = ['Domestic Girlfriend', 'Boku no Pico', 'Redo of a Healer', 'Ishozuku Reviewers', 'Naruto', 'One Piece', 'konosuba']
        //  const random = Math.floor(Math.random() * trolllist.length);
        //   this.userInput = trolllist[random]
      axios.get(`http://127.0.0.1:3000/anime?anime=${this.userInput}`)
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
            axios.get(`http://127.0.0.1:3000/search?q=${searchQuery.trim()}`)
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
      if(this.darkMode == false)
      {
        this.darkMode = true
        this.dark = 'blue'
        this.darker = 'red'
        console.log("should be dark")
      }
      if(this.darkMode == true)
      {
        this.darkMode = false
        document.documentElement.style.setProperty('--main-bg-color','#F7F6FB')
        document.documentElement.style.setProperty('--main-card-bg-color','#FFFFFF')
        console.log("should be light")
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
:root{
    --main-bg-color:darker;
    --main-card-bg-color:dark;
}
</style>
