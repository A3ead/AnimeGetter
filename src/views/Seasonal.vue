<template>
<div v-if="entireArchive!=null">
    <button class="button" @click="currentYear++">Previous Year</button>
    <button class="button" @click="getSeasonal(entireArchive[currentYear].year,season)" v-for="season in entireArchive[currentYear].seasons" :key="season">{{season}} {{entireArchive[currentYear].year}}</button>
    <button class="button" @click="currentYear--" v-if="currentYear!=0">Next Year</button>
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
        entireArchive:null

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
             console.log(res.data)


         })
          
      }

    
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