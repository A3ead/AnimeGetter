<template>

  <div class="mini-menu-container" id="mini-menu-container" style="backdrop-filter: blur(0px); background: none;">
    <div class="mini-search">
      <div class="mini-search-input-div"><input type="text" class="mini-search-input" id="mini-search-input" v-model="userInput"></div>
      <div class="mini-search-results-container">
        <div class="mini-search-result" v-for="anime in searchResults" :key="anime"><div class="mini-search-results-data-container"><div class="mini-search-dropdown-result-image" :style="{ backgroundImage: 'url(' + anime.image_url + ')' }" ></div><div class="mini-search-dropdown-result-data">{{anime.title}}</div></div></div>
      </div>

    </div>



 </div>

</template>


<script>

// import axios from 'axios'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation


export default {
  name: 'MiniSearch',
  
  components: {
    
    

  },
    data(){
    return{
      timer:null,
      userInput:'',
      searchResults:'',
    }
  },
  mounted(){
    let searchInput = document.getElementById('mini-search-input')
    searchInput.addEventListener('keydown',event=>{
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{this.animeSearch(this.userInput)},500)
    })
  },
  methods:{
    animeSearch(searchQuery){
      if(searchQuery.trim() != "" && searchQuery.trim().length > 2){
            //console.log('searching', 'search q = : ' + searchQuery)
            axios.get(`${ipServer}/search?q=${searchQuery.trim()}`)
            .then(response=> 
            {
              //console.log(response.data)
              let temp = response.data
              this.searchResults = temp.filter(this.deleteHentai)
          }) 
      }
     
    },
    deleteHentai(anime){
        return anime.rated != "Rx"
    }

  }
}
</script>