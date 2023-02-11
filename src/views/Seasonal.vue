<template>
<div v-if="allSeasonsList!=null">
    <button class="button" @click="highlightTabBasedOnSeason(), currentYear++">Previous Year</button>
    <button
        class="button" :id="allSeasonsList[currentYear].year + season" 
        @click="getSeasonal(allSeasonsList[currentYear].year,season), currentSelectedButton = allSeasonsList[currentYear].year + season, highlightTab(allSeasonsList[currentYear].year + season)" 
        v-for="season in allSeasonsList[currentYear].seasons" :key="season"
      >
      {{capitalizeLetter(season)}} {{allSeasonsList[currentYear].year}}
    </button>
    <button class="button" v-if="currentSeasonCheck != currentSelectedButton"  @click="getCurrentSeason()">Current Season</button>
    <button class="button" @click=" highlightTabBasedOnSeason(),currentYear--" v-if="currentYear!=0">Next Year</button>
</div>

<div class="filters-div">
  <div>
    <button class="button-filter-no-border" @click="selectedFilter = 'All',highlightFilter('All')" id="All">All</button>
    <button class="button-filter-no-border" @click="selectedFilter = 'TV',highlightFilter('TV')" id="TV">TV</button>
    <button class="button-filter-no-border" @click="selectedFilter = 'Movies',highlightFilter('Movies')" id="Movies">Movies</button>
    <button class="button-filter-no-border" @click="selectedFilter = 'OVA',highlightFilter('OVA')" id="OVA">OVA</button>
    <button class="button-filter-no-border" @click="selectedFilter = 'ONA',highlightFilter('ONA')" id="ONA">ONA</button>
    <button class="button-filter-no-border" @click="selectedFilter = 'Special',highlightFilter('Special')" id="Special">Special</button>
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
    <!-- <div  v-if="selectedFilter == 'All' || selectedFilter == 'TV'">
      <div class="Season-Type">TV Continuing</div>
      <div class="single-day-container"> 
          <CardComponent :animeList='tvCArray'/>
      </div>
    </div> -->
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
// import axios from 'axios'
import CardComponent from '@/components/CardComponent.vue'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation


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
        allSeasonsList:null,
        animeArray:null,
        tvArray:null,
        tvCArray:null,
        ovaArray:null,
        onaArray:null,
        specialArray:null,
        movieArray:null,
        selectedFilter:'All',
        currentSeasonCheck:null,
        apiIP: ipServer

    }
  },
  
  methods:{
      capitalizeLetter(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
      async getSeasonsList() {
        const request = await fetch(`/api/getSeasonsList`)
        const response = await request.json()
        this.allSeasonsList = response.data
      },
      assignArrays(tempArray){
        this.tvArray = tempArray.filter(this.getTV)
        //this.tvCArray = tempArray.filter(this.getTVC)
        this.movieArray = tempArray.filter(this.getMovie)
        this.ovaArray = tempArray.filter(this.getOVA)
        this.onaArray = tempArray.filter(this.getONA)
        this.specialArray = tempArray.filter(this.getSpecial)
      },

      async getSeasonal(year,season) {
        //console.log(year,season)

        const request = await fetch(`/api/getSeasonal?year=${year}&season=${season}&current=false`)
        const response = await request.json()
        const tempArray = response.data
        this.assignArrays(tempArray)

          
      },
      // deleteKidsFromDay(anime){
      //   return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false
      // },
      checkForGenre(genre, anime){
          return anime.genres.some((arrVal) => arrVal.name.toLowerCase() === genre.toLowerCase()); 
      },
      checkForDemographic(demographic, anime){
          return anime.demographics.some((arrVal) => arrVal.name.toLowerCase() === demographic.toLowerCase()); 
      },

      getTV(anime){
        return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'TV' //&& anime.continuing == false
      },
      // getTVC(anime){
      //   return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'TV' && anime.continuing == true
      // },
      getMovie(anime){
        return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'Movie'
      },
      getOVA(anime){
        return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'OVA'
      },
      getONA(anime){
        return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'ONA'
      },
      getSpecial(anime){
        return this.checkForDemographic('kids',anime) == false && this.checkForGenre('hentai', anime) == false && anime.type == 'Special'
      },

      async getCurrentSeason(){
        const request = await fetch(`/api/getSeasonal?year=0&season=0&current=true`)
        const response = await request.json()
        const tempArray = response.data
        this.assignArrays(tempArray)
        this.currentYear = 0

        this.currentSelectedButton = tempArray[0].year + tempArray[0].season
        this.currentSeasonCheck = tempArray[0].year + tempArray[0].season

        this.selectedFilter = 'All'
        this.highlightTabBasedOnSeason()
        this.highlightFilter('All')

        
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
            document.getElementsByClassName('button-filter-no-border-selected')[0].className = 'button-filter-no-border'
        }
        catch {
         
        }
        finally {
            document.getElementById(filterID).classList.add('button-filter-no-border-selected')
        }
        }

  },
  created(){
    this.getSeasonsList()

  },
   mounted(){
    this.getCurrentSeason()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>