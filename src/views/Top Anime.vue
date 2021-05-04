<template>
  <div class='mainDiv'>
    <table class="top-anime-table">
      <tr class="top-anime-table-header">
        <th class="top-anime-list-header-element">Rank</th>
        <th class="top-anime-list-header-element"></th>
        <th class="top-anime-list-header-element">Title</th>
        <th class="top-anime-list-header-element">Episodes</th>
        <th class="top-anime-list-header-element">Score</th>
        <th class="top-anime-list-header-element">Date</th>
      </tr>

      <tr class="top-anime-list-element" v-for="anime in topAnimeList" :key="anime">
        <td class="top-anime-list-element-part">{{anime.rank}}</td>
        <td class="top-anime-list-element-part"><img class="top-list-image" v-bind:src="anime.image_url" alt=""></td>
        <td class="top-anime-list-element-part">{{anime.title}}</td>
        <td class="top-anime-list-element-part">{{anime.episodes}}</td>
        <td class="top-anime-list-element-part">{{anime.score}}</td>
        <td class="top-anime-list-element-part">{{anime.start_date}} - {{anime.end_date}}</td>
      </tr>
    </table>
  </div>
    
  <!-- <ul id='mainDiv' class='mainDiv'>
    <li class="top-list-element" v-for="anime in topAnimeList" :key="anime">
      <div class="top-list-container">
        <div>
          <div>{{anime.title}}</div>
          <div>{{anime.episodes}}</div>
          <div>{{anime.score}}</div>
          <div>{{anime.type}}</div>
          <div>{{anime.start_date}} - {{anime.end_date}}</div>
        </div>
        <img class="top-list-image" v-bind:src="anime.image_url" alt="">
      </div>
    </li>
  </ul> -->
</template>

<script>
import axios from 'axios'

export default {

  data(){
    return{
      topAnimeList:''

    }
  },
  mounted(){
    this.getTopAnime()

  },

  methods:{
    getTopAnime()
  {

      axios.get(`http://127.0.0.1:3000/top`)
      .then(res=>
      {
          this.topAnimeList = res.data.top
          console.log(res.data.top)

      })
  }
   
  }
}
</script>
