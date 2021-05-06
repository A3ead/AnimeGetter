<template>
<div v-if="entireArchive!=null">
    <button class="button" @click="currentYear++">Previous Year</button>
    <button class="button" @click="getSeasonal(entireArchive[currentYear].year,season)" v-for="season in entireArchive[currentYear].seasons" :key="season">{{season}} {{entireArchive[currentYear].year}}</button>
    <button class="button" @click="currentYear--" v-if="currentYear!=0">Next Year</button>
</div>

    <div class="single-day-container">
        <div v-for="anime in movieArray" :key="anime" class="card-container">
            <div class="card">
            <div class="anime-card-image" :style="{ backgroundImage: 'url(' + anime.image_url + ')' }"></div>
            <div class="anime-card-data-container">
                <div class="anime-card-title">
                        {{anime.title}}
                </div>        
                <div class="anime-card-synopsis">
                        {{anime.synopsis}}
                </div>
                <div class="anime-card-info-container">
                    <div>
                        <div class="anime-card-info"> Episodes: {{anime.episodes}}</div>
                        <div class="anime-card-info">Studio:&nbsp;<div v-for="producer in anime.producers" :key="producer"> {{producer.name}}</div></div>
                    </div>
                    <div class="anime-card-info-genres" >Genres:&nbsp;<div v-for="genre in anime.genres" :key="genre" class="single-genre"> {{genre.name}}</div></div>
                </div>
            </div>
            
           
            
        </div>
    </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Seasonal',
  props: {
  },
  data(){
    return{
        currentYear:0,
        entireArchive:null,
        animeArray:null,
        tvArray:null,
        tvCArray:null,
        ovaArray:null,
        onaArray:null,
        specialArray:null,
        movieArray:null

    }
  },
  methods:{
      getArchive() {
          axios.get(`http://127.0.0.1:3000/archive`)
          .then(res => 
          {
             this.entireArchive = res.data.archive
             console.log(res.data.archive)


         })
      },
      getSeasonal(year,season) {
          console.log(year,season)

          axios.get('http://127.0.0.1:3000/seasonal',{params:{'year':year,'season':season.toLowerCase()}})
          .then(res => 
          { 
            let tempArray = res.data.anime
            console.log(res.data)
            this.animeArray = tempArray
            //this.animeArray = tempArray.filter(this.deleteKidsFromDay)
            this.tvArray = tempArray.filter(this.getTV)
            this.tvCArray = tempArray.filter(this.getTVC)
            this.movieArray = tempArray.filter(this.getMovie)
            this.ovaArray = tempArray.filter(this.getOVA)
            this.onaArray = tempArray.filter(this.getONA)
            this.specialArray = tempArray.filter(this.getSpecial)


         })
          
      },
      // deleteKidsFromDay(anime){
      //   return anime.kids == false && anime.r18 == false
      // },
      getTV(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'TV' && anime.continueing == false
      },
      getTVC(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'TV' && anime.continueing == true
      },
      getMovie(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'Movie'
      },
      getOVA(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'OVA'
      },
      getONA(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'ONA'
      },
      getSpecial(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'Special'
      },

    
  },
  created(){
    this.getArchive()

  },

  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>