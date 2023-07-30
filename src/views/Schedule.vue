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
    
    <LoadingSkeleton v-if="isLoading"/>

    <template v-else>
        <div class="Schedule-Container" v-if="selected_day=='all'">
            <div class="Day-Container" v-for="(days,index) in Object.values(schedule)" :key="days">
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
            <CardComponent :animeList='schedule.monday'/>
        </div>
        <div v-if="selected_day=='tuesday'" class="single-day-container">
            <CardComponent :animeList='schedule.tuesday'/>
        </div>
        <div v-if="selected_day=='wednesday'" class="single-day-container">
            <CardComponent :animeList='schedule.wednesday'/>
        </div>
        <div v-if="selected_day=='thursday'" class="single-day-container">
            <CardComponent :animeList='schedule.thursday'/>
        </div>
        <div v-if="selected_day=='friday'" class="single-day-container">
            <CardComponent :animeList='schedule.friday'/>
        </div>
        <div v-if="selected_day=='saturday'" class="single-day-container">
            <CardComponent :animeList='schedule.saturday'/>
        </div>
        <div v-if="selected_day=='sunday'" class="single-day-container">
            <CardComponent :animeList='schedule.sunday'/>
        </div>
    </template>

</template>

<script>
// import axios from 'axios'
import CardComponent from '@/components/CardComponent.vue'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'
import { useFetchQueue } from '../mixins/fetch_mixin'
import config from "../assets/config.json"
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
let {ipServer, ipHeroku} = config.apiLocation


export default {

  components:{
        CardComponent,
        LoadingSkeleton
    },

  data(){
    return{
        day:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        schedule:{'monday':[], 'tuesday':[], 'wednesday':[], 'thursday':[], 'friday':[], 'saturday':[], 'sunday':[]},
        selected_day:'',
        apiIP: ipServer,
        isLoading: false

    }
  },
  mixins:[AnimeInfo_mixins],
  methods:{
    // logDate(){
    //     const d = new Date();
    //     let m = d.getUTCMinutes();
    //     let s = d.getUTCSeconds();
    //     let ms = d.getUTCMilliseconds();
    //     console.log(m + ":" + s + "." + ms)
    // },
      async getSchedule()
      {
        this.isLoading = true
        const response = await new Promise((resolve, reject)=>{
            useFetchQueue([['/api/getSchedules?limit=1&page=1',(result)=>{resolve(result)}]])
        })

        const totalItems = response.pagination.items.total
        const numOfPages = Math.ceil(totalItems/25)

        let currentData = []
        let responses = []

        for(let i = 0; i < numOfPages; i++){
           responses[i] = new Promise((resolve, reject)=>{
                useFetchQueue([[`/api/getSchedules?limit=25&page=${i+1}`,(result)=>{resolve(result)}]])
            })
        }

        let results = await Promise.all(responses)

        for(let result of results){
            currentData = [...currentData, ...result.data] 
        }

        currentData.sort((a,b)=>a.popularity - b.popularity)

        for(let entry of currentData){
            let entryDay = entry.broadcast.day
            if (entry.members > 0){
                switch (entryDay){
                    case "Mondays":
                        this.schedule.monday.push(entry)
                        break
                    case "Tuesdays":
                        this.schedule.tuesday.push(entry)
                        break
                    case "Wednesdays":
                        this.schedule.wednesday.push(entry)
                        break
                    case "Thursdays":
                        this.schedule.thursday.push(entry)
                        break
                    case "Fridays":
                        this.schedule.friday.push(entry)
                        break
                    case "Saturdays":
                        this.schedule.saturday.push(entry)
                        break
                    case "Sundays":
                        this.schedule.sunday.push(entry)
                        break
                    default: 
                        break
                }
            }
            
        }

        console.log(this.schedule)
        //this.schedule = tempArray.map(this.removeKids)
        this.isLoading = false
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