<template>
  <div class='mainDiv'>
    <div class="top-filters-div">
      <div>
        <button class="button-filter-no-border" @click="highlightFilter('All'), currentPage = 1, subtype = '', getTop(subtype,currentPage)" id="All">All Anime</button>
        <button class="button-filter-no-border" @click="highlightFilter('Airing'), currentPage = 1, subtype = 'airing', getTop(subtype,currentPage)" id="Airing">Top Airing</button>
        <button class="button-filter-no-border" @click="highlightFilter('Upcoming'), currentPage = 1, subtype = 'upcoming', getTop(subtype,currentPage)" id="Upcoming">Top Upcoming</button>
        <button class="button-filter-no-border" @click="highlightFilter('TV'), currentPage = 1, subtype = 'tv', getTop(subtype,currentPage)" id="TV">Top TV Series</button>
        <button class="button-filter-no-border" @click="highlightFilter('Movies'), currentPage = 1, subtype = 'movie', getTop(subtype,currentPage)" id="Movies">Top Movies</button>
        <button class="button-filter-no-border" @click="highlightFilter('OVA'), currentPage = 1, subtype = 'ova', getTop(subtype,currentPage)" id="OVA">Top OVAs</button>
        <!-- <button class="button-filter" @click="highlightFilter('ONA'), currentPage = 1, subtype = 'ona', getTop(subtype,currentPage)" id="ONA">Top ONAs</button> -->
        <button class="button-filter-no-border" @click="highlightFilter('Special'), currentPage = 1, subtype = 'special', getTop(subtype,currentPage)" id="Special">Top Specials</button>
        <button class="button-filter-no-border" @click="highlightFilter('Popular'), currentPage = 1, subtype = 'bypopularity', getTop(subtype,currentPage)" id="Popular">Most Popular</button>
        <button class="button-filter-no-border" @click="highlightFilter('Favorite'), currentPage = 1, subtype = 'favorite', getTop(subtype,currentPage)" id="Favorite">Most Favorited</button>
      </div>
      <div>
        <button class="button-filter" @click="currentPage = 1, getTop(subtype,currentPage)" v-if="currentPage > 2"> First </button>
        <button class="button-filter" @click="currentPage--, getTop(subtype,currentPage)" v-if="currentPage != 1">Prev 50</button>
        <button class="button-filter" @click="currentPage++, getTop(subtype,currentPage)">Next 50</button>
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

      <tr class="top-anime-list-element" v-for="anime in topAnimeList" :key="anime" @click="pushing(anime.mal_id)">
        <td class="top-anime-list-element-part">{{anime.rank}}</td>
        <td class="top-anime-list-element-part"><img class="top-list-image" v-bind:src="anime.image_url" alt=""></td>
        <td class="top-anime-list-element-part">{{anime.title}}</td>
        <td class="top-anime-list-element-part">{{anime.episodes}}</td>
        <td class="top-anime-list-element-part">{{anime.score}}</td>
        <td class="top-anime-list-element-part">{{anime.start_date}} - {{anime.end_date}}</td>
      </tr>
    </table>
     <div class="top-filters-bottom-div">
      <div>
        <button class="button-filter" @click="currentPage = 1, getTop(subtype,currentPage)" v-if="currentPage > 2"> First </button>
        <button class="button-filter" @click="currentPage--, getTop(subtype,currentPage)" v-if="currentPage != 1">Prev 50</button>
        <button class="button-filter" @click="currentPage++, getTop(subtype,currentPage)">Next 50</button>
      </div>
    </div>
  </div>
    
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'

export default {

  data(){
    return{
      topAnimeList:'',
      currentPage:1,
      subtype:''

    }
  },
  mixins:[AnimeInfo_mixins],
  mounted(){
    this.getTop('',this.currentPage)
    this.highlightFilter('All')

  },

  methods:{
    getTop(subtype,page)
  {

      axios.get(`http://127.0.0.1:3000/top`,{params:{'subtype':subtype,'page':page}})
      .then(res=>
      {
          this.topAnimeList = res.data.top
          //console.log(res.data.top)

      })
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
