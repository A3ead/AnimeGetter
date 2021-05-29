<template>
    <div class="search-dropdown-result" v-for="anime in searchResults" :key="anime">
      <div class="search-dropdown-entire-container" @click="pushing(anime.mal_id)">
        <div class="search-dropdown-result-image" :style="{ backgroundImage: 'url(' + anime.image_url + ')' }" @click="pushing(anime.mal_id)"></div>       
        <div class="search-dropdown-result-data-container">
            <div class="search-dropdown-result-title">{{anime.title}}</div>
            <div class="search-dropdown-result-episodes">Episodes: {{anime.episodes}} ({{anime.type}})</div>
            <div class="search-dropdown-result-score">Score: {{anime.score}}</div>
            <div class="search-dropdown-result-score">Aired: {{dateForSearch(anime.start_date)}} to <br> {{dateForSearch(anime.end_date)}}</div>
        </div>
      </div>
        

        
    </div>

</template>

<script>
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'

export default {
  name: 'searchDropdown',
  props: {
      searchResults:'',
  },
  data(){
    return{

    }
  },
  mixins:[AnimeInfo_mixins],
  methods:{
      dateForSearch(dateFromAPI){
      const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
      let blabla = new Date(dateFromAPI).toLocaleDateString('en-GB', options).replaceAll('/', '-')
      return blabla

      
    } 
  },
  computed:{

  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>