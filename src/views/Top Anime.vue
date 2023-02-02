<template>
  <div class='mainDiv'>
    <div class="top-filters-div">
      <div>
        <button class="button-filter-no-border" @click="highlightFilter('All'), currentPage = 1, type = '',  filter = '', getTop()" id="All">All Anime</button>
        <button class="button-filter-no-border" @click="highlightFilter('Airing'), currentPage = 1, type = 'airing', filter = 'airing', getTop()" id="Airing">Top Airing</button>
        <button class="button-filter-no-border" @click="highlightFilter('Upcoming'), currentPage = 1, type = '', filter = 'upcoming', getTop()" id="Upcoming">Top Upcoming</button>
        <button class="button-filter-no-border" @click="highlightFilter('TV'), currentPage = 1, type = 'tv', filter = '', getTop()" id="TV">Top TV Series</button>
        <button class="button-filter-no-border" @click="highlightFilter('Movies'), currentPage = 1, type = 'movie', filter = '', getTop()" id="Movies">Top Movies</button>
        <button class="button-filter-no-border" @click="highlightFilter('OVA'), currentPage = 1, type = 'ova', filter = '', getTop()" id="OVA">Top OVAs</button>
        <!-- <button class="button-filter" @click="highlightFilter('ONA'), currentPage = 1, subtype = 'ona', getTop(subtype,currentPage)" id="ONA">Top ONAs</button> -->
        <button class="button-filter-no-border" @click="highlightFilter('Special'), currentPage = 1, type = 'special', filter = '', getTop()" id="Special">Top Specials</button>
        <button class="button-filter-no-border" @click="highlightFilter('Popular'), currentPage = 1, type = '', filter = 'bypopularity', getTop()" id="Popular">Most Popular</button>
        <button class="button-filter-no-border" @click="highlightFilter('Favorite'), currentPage = 1,type = '', filter = 'favorite', getTop()" id="Favorite">Most Favorited</button>
      </div>
      <div>
        <button class="button-filter" @click="currentPage = 1, getTop()" v-if="currentPage > 2"> First </button>
        <button class="button-filter" @click="currentPage--, getTop()" v-if="currentPage != 1">Prev 50</button>
        <button class="button-filter" @click="currentPage++, getTop()">Next 50</button>
      </div>
    </div>
    <table class="top-anime-table">
      <tr class="top-anime-table-header">
        <th class="top-anime-list-header-element">Rank</th>
        <th class="top-anime-list-header-element"></th>
        <th class="top-anime-list-header-element">Title</th>
        <th class="top-anime-list-header-element">Episodes</th>
        <th class="top-anime-list-header-element">Score</th>
        <th class="top-anime-list-header-element">Date</th>
      </tr>
      
      <tr class="top-anime-list-element" v-for="anime in topAnimeList" :key="anime" >
        
        <td class="top-anime-list-element-part">{{anime.rank}}</td>
        <td class="top-anime-list-element-part"><a :href="hrefLinkAnime(anime.mal_id)"><img class="top-list-image" v-bind:src="anime.images.webp.image_url" alt=""> </a></td>
        <td class="top-anime-list-element-part"><a :href="hrefLinkAnime(anime.mal_id)">{{anime.title}}</a></td>
        <td class="top-anime-list-element-part">{{anime.episodes}}</td>
        <td class="top-anime-list-element-part">{{anime.score}}</td>
        <td class="top-anime-list-element-part">{{anime.aired.string}}</td>
        
      </tr>
     
    </table>
     <div class="top-filters-bottom-div">
      <div>
        <button class="button-filter" @click="currentPage = 1, getTop()" v-if="currentPage > 2"> First </button>
        <button class="button-filter" @click="currentPage--, getTop()" v-if="currentPage != 1">Prev 50</button>
        <button class="button-filter" @click="currentPage++, getTop()">Next 50</button>
      </div>
    </div>
  </div>
    
</template>

<script>
// import axios from 'axios'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation


export default {

  data(){
    return{
      topAnimeList:'',
      currentPage:1,
      type:'',
      filter:'',
      apiIP: ipServer,

    }
  },
  mixins:[AnimeInfo_mixins],
  mounted(){
    this.getTop('',this.currentPage)
    this.highlightFilter('All')

  },

  methods:{
    async getTop(){

      const request = await fetch(`/api/getTopAnime?page=${this.currentPage}&type=${this.type}&filter=${this.filter}`)
      const response = await request.json()
          this.topAnimeList = response.data
          console.log(response)
  },
    highlightFilter(filterID){
      try {
          document.getElementsByClassName('button-filter-no-border-selected')[0].className = 'button-filter-no-border'
      }
      catch {
        
      }
      finally {
          document.getElementById(filterID).classList.add('button-filter-no-border-selected')
      }
      }

  }
}
</script>
