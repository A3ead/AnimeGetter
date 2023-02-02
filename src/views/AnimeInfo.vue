<template>
  <div class="anime-info-entire-container">
    <div class="anime-info-title-synopsis-card"> 
        <img class="anime-info-img" :src="fetcheddata.image" alt="" srcset="">
      <div>
          <div class="anime-info-title">
              <h1> {{fetcheddata.title}} </h1>
              <h4> {{fetcheddata.title_english}} ({{fetcheddata.title_japanese}}) </h4>
          </div>
          <div class="anime-info-synopsis">
              {{fetcheddata.synopsis}}
          </div>
      </div>
    </div>
    <div class="anime-info-information-card">
      <div class="anime-info-single-info-div">Episodes: {{fetcheddata.episodes}}</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Genres: <span v-for="genre in fetcheddata.genres" :key="genre"> {{genre.name + ' '}} </span></div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">rank: {{fetcheddata.rank}}</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">score: {{fetcheddata.rating}}</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Studios: <span v-for="studio in fetcheddata.studios" :key="studio"> {{studio.name + ' '}} </span></div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Status: {{fetcheddata.status}} </div>
    </div>
    <div class="anime-info-related-card">
      <!-- <div class="anime-info-single-related" v-for="related in Object.entries(fetcheddata.related)" :key="related">{{related[0]}}: {{related[1][0].name}}</div> -->
      <div class="anime-info-single-related" v-for="relation in fetcheddata.relations" :key="relation">{{relation.relation}}: <div v-for="entry in relation.entry" :key="entry">{{entry.name}}</div></div>
    </div>


  </div>
</template>

<script>
// import axios from 'axios'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation


export default {
  name: 'AnimeInfo',
  watch: {
      '$route': function(){if(this.$route.path == '/info') this.renderAnimeInfo()}},
  
  components: {

  },
    data(){
    return{
      fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:'',title_japanese:'', title_english:'',genres:'',rank:'',studios:'',status:'',related:'',},
      apiIP: ipServer
    }
  },
  mounted(){
    this.renderAnimeInfo()
  },
  methods:{
    
    //console.log(malID);
     async renderAnimeInfo(){
      let malID = this.$route.query.AG_ID
      const request = await fetch(`/api/getAnimeById?malID=${malID}`)
      const response = await request.json()
        console.log(response.data)
        let currentData = response.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.title_english = currentData.title_english
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.score
        this.fetcheddata.image = currentData.images.webp.image_url
        this.fetcheddata.title_japanese = currentData.title_japanese
        this.fetcheddata.genres = currentData.genres
        this.fetcheddata.rank = currentData.rank
        this.fetcheddata.studios = currentData.studios
        this.fetcheddata.status = currentData.status
        this.fetcheddata.relations = currentData.relations
    }
  }
}
</script>