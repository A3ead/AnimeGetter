<template>

    <div id='datashower' class='datashower'>
        <a href="" class='image' id='imageLink'><img v-bind:src="fetcheddata.image" alt="" id='image'></a>
        <div id='container' class='container'>
            <div id='title' class='title'>{{fetcheddata.title}}</div>
            <div id='synopsis' class='synopsis'>{{fetcheddata.synopsis}}</div>
        </div>
        <div id='misc-info' class='misc-info'>
            <div>
                <div id='episodes' class='episodes'>Episodes: {{fetcheddata.episodes}}</div>
                <div id='rating' class='rating'>Rating: {{fetcheddata.rating}}</div>
            </div>
            <button id='add' class='button' v-on:click="addAnime()">Add to List</button>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from "../assets/config.json"
let {ipServer, ipHeroku} = config.apiLocation

export default {
  name: 'DataGetter',
  props: {
  },
  data(){
    return{
      userInput:null
    }
  },
  methods:{
    addAnime()
    {
        if(this.fetcheddata.title != '')
        {
            axios.post(`${ipServer}/addanime`, this.fetcheddata)
            .then(res=>
            {
                this.$store.commit('changeAnimeList',res.data) 
                //console.log(res.data)
            })
        }

    },
    
  },

  computed:{
    fetcheddata(){return this.$store.getters.fetcheddataGetter}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>
