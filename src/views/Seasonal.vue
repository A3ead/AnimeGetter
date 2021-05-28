<template>
<div v-if="entireArchive!=null">
    <button class="button" @click="highlightTabBasedOnSeason(), currentYear++">Previous Year</button>
    <button class="button" :id="entireArchive[currentYear].year + season" @click="getSeasonal(entireArchive[currentYear].year,season), currentSelectedButton = entireArchive[currentYear].year + season, highlightTab(entireArchive[currentYear].year + season)" v-for="season in entireArchive[currentYear].seasons" :key="season">{{season}} {{entireArchive[currentYear].year}}</button>
    <button class="button" v-if="currentSeasonCheck != currentSelectedButton"  @click="getCurrentSeason()">Current Season</button>
    <button class="button" @click=" highlightTabBasedOnSeason(),currentYear--" v-if="currentYear!=0">Next Year</button>
</div>

<div class="filters-div">
  <div>
    <button class="button-filter" @click="selectedFilter = 'All',highlightFilter('All')" id="All">All</button>
    <button class="button-filter" @click="selectedFilter = 'TV',highlightFilter('TV')" id="TV">TV</button>
    <button class="button-filter" @click="selectedFilter = 'Movies',highlightFilter('Movies')" id="Movies">Movies</button>
    <button class="button-filter" @click="selectedFilter = 'OVA',highlightFilter('OVA')" id="OVA">OVA</button>
    <button class="button-filter" @click="selectedFilter = 'ONA',highlightFilter('ONA')" id="ONA">ONA</button>
    <button class="button-filter" @click="selectedFilter = 'Special',highlightFilter('Special')" id="Special">Special</button>
  </div>
  <div>
     here goes jump to and dropdown   
  </div>
</div>

    <div v-if="selectedFilter == 'All' || selectedFilter == 'TV'">
      <div class="Season-Type">TV</div>
      <div class="single-day-container">
          <CardComponent :animeList='tvArray'/>
      </div>
    </div>
    <div  v-if="selectedFilter == 'All' || selectedFilter == 'TV'">
      <div class="Season-Type">TV Continuing</div>
      <div class="single-day-container"> 
          <CardComponent :animeList='tvCArray'/>
      </div>
    </div>
    <div v-if="selectedFilter == 'All' || selectedFilter == 'Movies'">
      <div class="Season-Type">Movies</div>
      <div class="single-day-container"> 
          <CardComponent :animeList='movieArray'/>
      </div>
    </div>
    <div v-if="selectedFilter == 'All' || selectedFilter == 'OVA'">
      <div class="Season-Type">OVA</div>
      <div class="single-day-container">
          <CardComponent :animeList='ovaArray'/>
      </div>
    </div>
    <div v-if="selectedFilter == 'All' || selectedFilter == 'ONA'">
      <div class="Season-Type">ONA</div>
      <div class="single-day-container">
          <CardComponent :animeList='onaArray'/>
      </div>
    </div>
    <div v-if="selectedFilter == 'All' || selectedFilter == 'Special'">
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
        currentSelectedButton: null,
        currentYear:0,
        entireArchive:null,
        animeArray:null,
        tvArray:null,
        tvCArray:null,
        ovaArray:null,
        onaArray:null,
        specialArray:null,
        movieArray:null,
        selectedFilter:'All',
        currentSeasonCheck:null

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
            this.currentYear = 0

            this.currentSelectedButton = res.data.season_year + res.data.season_name
            this.currentSeasonCheck = res.data.season_year + res.data.season_name
            this.selectedFilter = 'All'

            this.highlightTabBasedOnSeason()
            this.highlightFilter('All')


         })
        
      },
      highlightTab(dayID){
        try {
            document.getElementsByClassName('button-selected')[0].className = 'button'
        }
        catch {
            
        }
        finally {
            document.getElementById(dayID).classList.add('button-selected')
        }
        },
      highlightTabBasedOnSeason(){
        try {
            document.getElementsByClassName('button-selected')[0].className = 'button'
        }
        catch{

        }
        finally{
        setTimeout(() => {
         let buttonsArray = document.getElementsByClassName('button')
         for(let button of buttonsArray){
           if (button.id === this.currentSelectedButton){
             button.className = 'button-selected'
           }
           else{
             button.className = 'button'
           }
         }
        },50);


        }
        },
       highlightFilter(filterID){
        try {
            document.getElementsByClassName('button-filter-selected')[0].className = 'button-filter'
        }
        catch {
            
        }
        finally {
            document.getElementById(filterID).classList.add('button-filter-selected')
        }
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