<template>
<div v-if="entireArchive!=null">
    <button class="button" @click="currentYear++">Previous Year</button>
    <button class="button" @click="getSeasonal(entireArchive[currentYear].year,season)" v-for="season in entireArchive[currentYear].seasons" :key="season">{{season}} {{entireArchive[currentYear].year}}</button>
    <button class="button" @click="currentYear--" v-if="currentYear!=0">Next Year</button>
</div>

    <div>
      <div class="Season-Type">TV</div>
      <div class="single-day-container">
          <CardComponent :animeList='tvArray'/>
      </div>
    </div>
    <div>
      <div class="Season-Type">TV Continuing</div>
      <div class="single-day-container"> 
          <CardComponent :animeList='tvCArray'/>
      </div>
    </div>
    <div>
      <div class="Season-Type">Movies</div>
      <div class="single-day-container"> 
          <CardComponent :animeList='movieArray'/>
      </div>
    </div>
    <div>
      <div class="Season-Type">OVA</div>
      <div class="single-day-container">
          <CardComponent :animeList='ovaArray'/>
      </div>
    </div>
    <div>
      <div class="Season-Type">ONA</div>
      <div class="single-day-container">
          <CardComponent :animeList='onaArray'/>
      </div>
    </div>
    <div>
      <div class="Season-Type">Special</div>
      <div class="single-day-container">
          <CardComponent :animeList='specialArray'/>
      </div>
    </div>


</template>

<script>
import axios from 'axios'
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Seasonal',
  props: {
  },
  components:{
        CardComponent
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
             //console.log(res.data.archive)


         })
      },
      getSeasonal(year,season) {
          //console.log(year,season)

          axios.get('http://127.0.0.1:3000/seasonal',{params:{'year':year,'season':season.toLowerCase()}})
          .then(res => 
          { 
            let tempArray = res.data.anime
            //console.log(res.data)
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
        return anime.kids == false && anime.r18 == false && anime.type == 'TV' && anime.continuing == false
      },
      getTVC(anime){
        return anime.kids == false && anime.r18 == false && anime.type == 'TV' && anime.continuing == true
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

      getCurrentSeason(){
                  axios.get('http://127.0.0.1:3000/current')
          .then(res => 
          { 
            let tempArray = res.data.anime
            //console.log(res.data)
            //this.animeArray = tempArray.filter(this.deleteKidsFromDay)
            this.tvArray = tempArray.filter(this.getTV)
            this.tvCArray = tempArray.filter(this.getTVC)
            this.movieArray = tempArray.filter(this.getMovie)
            this.ovaArray = tempArray.filter(this.getOVA)
            this.onaArray = tempArray.filter(this.getONA)
            this.specialArray = tempArray.filter(this.getSpecial)


         })
        
      }

    
  },
  created(){
    this.getArchive()

  },
   mounted(){
    this.getCurrentSeason()

  },

  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>