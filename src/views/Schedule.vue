<template>
    <div class="tabs-div">
        <button class="button" @click="selected_day = 'all',highlightTab('all')" id="all">All</button>
        <button class="button" @click="selected_day = 'monday',highlightTab('monday')" id="monday">Monday</button>
        <button class="button" @click="selected_day = 'tuesday',highlightTab('tuesday')" id="tuesday">Tuesday</button>
        <button class="button" @click="selected_day = 'wednesday',highlightTab('wednesday')" id="wednesday">Wednesday</button>
        <button class="button" @click="selected_day = 'thursday',highlightTab('thursday')" id="thursday">Thursday</button>
        <button class="button" @click="selected_day = 'friday',highlightTab('friday')" id="friday">Friday</button>
        <button class="button" @click="selected_day = 'saturday',highlightTab('saturday')" id="saturday">Saturday</button>
        <button class="button" @click="selected_day = 'sunday',highlightTab('sunday')" id="sunday">Sunday</button>
    </div>
    
    <div class="Schedule-Container" v-if="selected_day=='all'">
        <div class="Day-Container" v-for="(days,index) in schedule" :key="days">
            <div class="Day">{{day[index]}}</div>
            <div class="Day-Schedule">
                <div class="Schedule-Anime" v-for="anime in days" :key="anime">
                    <div class="anime-schedule-title" @click="pushing(anime.mal_id)">
                         {{anime.title}}
                    </div>                 
                </div>
            </div>
            
        </div>
    </div>
    
    <div v-if="selected_day=='monday'" class="single-day-container">
        <CardComponent :animeList='schedule[0]'/>
    </div>
    <div v-if="selected_day=='tuesday'" class="single-day-container">
        <CardComponent :animeList='schedule[1]'/>
    </div>
    <div v-if="selected_day=='wednesday'" class="single-day-container">
        <CardComponent :animeList='schedule[2]'/>
    </div>
    <div v-if="selected_day=='thursday'" class="single-day-container">
        <CardComponent :animeList='schedule[3]'/>
    </div>
    <div v-if="selected_day=='friday'" class="single-day-container">
        <CardComponent :animeList='schedule[4]'/>
    </div>
    <div v-if="selected_day=='saturday'" class="single-day-container">
        <CardComponent :animeList='schedule[5]'/>
    </div>
    <div v-if="selected_day=='sunday'" class="single-day-container">
        <CardComponent :animeList='schedule[6]'/>
    </div>
</template>

<script>
import axios from 'axios'
import CardComponent from '@/components/CardComponent.vue'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'


export default {

  components:{
        CardComponent
    },

  data(){
    return{
        day:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        schedule:[],
        selected_day:'',


    }
  },
  mixins:[AnimeInfo_mixins],
  methods:{
      getSchedule()
      {
         axios.get('http://127.0.0.1:3000/schedule')
        .then(res=>
        {   

            let currentData = res.data
           //console.log(res.data)
            let tempArray = [currentData.monday, currentData.tuesday, currentData.wednesday, currentData.thursday, currentData.friday, currentData.saturday, currentData.sunday]
            this.schedule = tempArray.map(this.removeKids)
            

        })
    },
    deleteKidsFromDay(anime){
        return anime.kids == false
    },
    removeKids(day)
    {
        let temp = day.filter(this.deleteKidsFromDay)
        return temp
    },
    highlightTab(dayID){
        try {
            document.getElementsByClassName('button-selected')[0].className = 'button'
        }
        catch {
            
        }
        finally {
            document.getElementById(dayID).className = 'button-selected'
        }

    }

  },

  mounted(){
      this.getSchedule()
    //   //console.log(this.$router)
      let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'tuesday', 'friday', 'saturday']
      this.selected_day = daysOfWeek[new Date().getDay()]
      console.log(this.selected_day)
      this.highlightTab(this.selected_day)
      
  }
}
</script>

<style>
@import '../assets/style.css';

</style>