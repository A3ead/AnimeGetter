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
      <div class="anime-info-single-info-div">rank: {{this.fetcheddata.rank}}</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">score: {{this.fetcheddata.rating}}</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Studios: <span v-for="studio in fetcheddata.studios" :key="studio"> {{studio.name + ' '}} </span></div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Status: {{this.fetcheddata.status}} </div>
    </div>
    <div class="anime-info-related-card">
      <div class="anime-info-single-related"> Adaptation:	Fate/Zero </div>
      <div class="anime-info-single-related">Sequel:	Fate/Zero 2nd Season</div>
      <div class="anime-info-single-related"> Summary:	Fate/Zero Remix</div>
      <div class="anime-info-single-related">Side story:	Fate/Zero: Onegai! Einzbern Soudanshitsu</div>
      <div class="anime-info-single-related"> Other:	Fate/Zero Cafe</div>
      <div class="anime-info-single-related"> Character:	Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note - Hakamori to Neko to Majutsushi, Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note</div>

    </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AnimeInfo',
  
  components: {

  },
    data(){
    return{
      fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:'',title_japanese:'', title_english:'',genres:'',rank:'',studios:'',status:'',related:'',},
    }
  },
  mounted(){
    let malID = this.$route.query.AG_ID
    console.log(malID);
     (()=>{
      axios.get(`http://127.0.0.1:3000/animeInfo?animeID=${malID}`)
      .then(response=> 
      {
        console.log(response.data)
        let currentData = response.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.title_english = currentData.title_english
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.score
        this.fetcheddata.image = currentData.image_url
        this.fetcheddata.title_japanese = currentData.title_japanese
        this.fetcheddata.genres = currentData.genres
        this.fetcheddata.rank = currentData.rank
        this.fetcheddata.studios = currentData.studios
        this.fetcheddata.status = currentData.status
        this.fetcheddata.related = currentData.related
        
     })
    })()

  }
}
</script>