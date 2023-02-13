<template>
    <div class="search-dropdown-result" v-for="anime in searchResults" :key="anime">
      <a :href="hrefLinkAnime(anime.mal_id)">
      <div class="search-dropdown-entire-container" >
        <div class="search-dropdown-result-image" :style="{ backgroundImage: 'url(' + anime.images.webp.image_url + ')' }" ></div>       
        <div class="search-dropdown-result-data-container">
            <div class="search-dropdown-result-title">{{anime.title}}</div>
            <div class="search-dropdown-result-info">Episodes: {{anime.episodes}} ({{anime.type}})</div>
            <div class="search-dropdown-result-info">Score: {{anime.score}}</div>
            <div class="search-dropdown-result-info">Aired: {{dateForSearch(anime.aired.from)}} to <br> {{dateForSearch(anime.aired.to)}}</div>
        </div>
      </div>
      </a>
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