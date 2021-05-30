<template>
    <div class="search-dropdown-result" v-for="anime in searchResults" :key="anime">
      <div class="search-dropdown-entire-container" @click="pushing(anime.mal_id)">
        <div class="search-dropdown-result-image" :style="{ backgroundImage: 'url(' + anime.image_url + ')' }" @click="pushing(anime.mal_id)"></div>       
        <div class="search-dropdown-result-data-container">
            <div class="search-dropdown-result-title">{{anime.title}}</div>
            <div class="search-dropdown-result-info">Episodes: {{anime.episodes}} ({{anime.type}})</div>
            <div class="search-dropdown-result-info">Score: {{anime.score}}</div>
            <div class="search-dropdown-result-info">Aired: {{dateForSearch(anime.start_date)}} to <br> {{dateForSearch(anime.end_date)}}</div>
        </div>
      </div>
    </div>   
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'

export default {
  name: 'SearchInfo',
  watch: {
      '$route': 'animeSearch'
  },
  
  components: {

  },
    data(){
    return{
        searchResults:null

    }
  },
  mixins:[AnimeInfo_mixins],
  mounted(){
      this.animeSearch()
  },
  methods:{

     animeSearch(){
        let searchQuery = this.$route.query.q
      if(searchQuery != ""){
            //console.log('searching', 'search q = : ' + searchQuery)
            axios.get(`http://127.0.0.1:3000/search?q=${searchQuery}`)
            .then(response=> 
            {
              //console.log(response.data)
              this.searchResults = response.data
          }) 
      }
     
    },
    dateForSearch(dateFromAPI){
      const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
      let blabla = new Date(dateFromAPI).toLocaleDateString('en-GB', options).replaceAll('/', '-')
      return blabla
    }
  }
}
</script>