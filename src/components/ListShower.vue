<template>
<div v-if="isShown == true">
    <button class='button-list' v-on:click="isShown=false">Hide List</button>
    <div id="animelistdiv" class="animelistdiv">
        <ul id="list" class='list'>  
            <li v-on:click="showInfo(anime.title)" v-for='anime in animeList' :key='anime' class="list-element">{{anime.title}}</li>
         </ul>
        <div id='animeinfo' class='info-animeinfo'>
            <div id='infoshower' class='info-datashower'>
                <a href="" class='info-image' id='info-imageLink'><img v-bind:src="fetcheddata.image" alt="" id='info-image'></a>
                <div id='info-container' class='info-container'>
                    <div id='info-title' class='info-title'>{{fetcheddata.title}}</div>
                    <div id='info-synopsis' class='info-synopsis'>{{fetcheddata.synopsis}}</div>
                </div>
                <div id='info-misc-info' class='info-misc-info'>
                    <div id='info-episodes' class='info-episodes'>Episodes: {{fetcheddata.episodes}}</div>
                    <div id='info-rating' class='info-rating'>Rating: {{fetcheddata.rating}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div v-else>
    <button class='button-list' v-on:click="showList()">Show List</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListShower',
  props: {
  },
  data(){
    return{
        fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
        isShown:false
    }
  },
  methods:{
    showList()
    {   
        axios.get(`http://127.0.0.1:3000/list`)
        .then(res=>
        {   
            //this.animeList = res.data
            this.$store.commit('changeAnimeList',res.data) 
            this.isShown = true
        })
    },

showInfo(title)
{
    axios.get('http://127.0.0.1:3000/get',{params:{'title':title}})
    .then(res=>
    {   

        let currentData = res.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.rating
        this.fetcheddata.image = currentData.image

    })

}
  },
  computed:{
      animeList(){return this.$store.getters.animelistGetter}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>
