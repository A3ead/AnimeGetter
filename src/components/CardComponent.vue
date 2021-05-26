<template>
        <div v-for="anime in animeList" :key="anime" class="card-container">
            <div class="card">
            <div class="anime-card-image" :style="{ backgroundImage: 'url(' + anime.image_url + ')' }" @click="pushing(anime.mal_id)"></div>
            <div class="anime-card-data-container">
                <div @click="pushing(anime.mal_id)" class="anime-card-title">
                        {{anime.title}}
                </div>        
                <div class="anime-card-synopsis">
                        {{anime.synopsis}}
                </div>
                <div class="anime-card-info-container">
                    <div>
                        <div class="anime-card-info"> Episodes: {{anime.episodes}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Source: {{anime.source}}</div> 
                        <div class="anime-card-info">Studio:&nbsp;<div v-for="producer in anime.producers" :key="producer"> {{producer.name}}</div></div>
                    </div>
                    <div class="anime-card-info-genres" >Genres:&nbsp;<div v-for="genre in anime.genres" :key="genre" class="single-genre"> {{genre.name}}</div></div>
                </div>
            </div>
            
           
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AnimeInfo_mixins from '../mixins/AnimeInfo_mixins'

export default {
  name: 'CardComponent',
  props: {
      animeList:'',
  },
  data(){
    return{

    }
  },
  mixins:[AnimeInfo_mixins],
  methods:{

  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>