<template>
        <div v-for="anime in animeList" :key="anime" class="card-container">
            <div class="card">
            <a :href="hrefLinkAnime(anime.mal_id)"><div class="anime-card-image" :style="{ backgroundImage: 'url(' + anime.images.webp.image_url + ')' }"></div></a>
            <div class="anime-card-data-container">
                <div class="anime-card-title">
                      <a :href="hrefLinkAnime(anime.mal_id)" >{{anime.title}}</a> 
                </div>        
                <div class="anime-card-synopsis">
                        {{anime.synopsis}}
                </div>
                <div class="anime-card-info-container">
                    <div>
                        <div class="anime-card-info"> Episodes: {{anime.episodes}}<span style="color:blueviolet">&nbsp;|&nbsp;</span> Score: {{anime.score}}<span style="color:blueviolet">&nbsp;|&nbsp;</span>Source: {{anime.source}}</div> 
                        <div class="anime-card-info">Studio:&nbsp;<div v-for="producer in anime.producers" :key="producer"> {{producer.name}}</div></div>
                    </div>
                    <div class="anime-card-info-genres" >Genres:&nbsp;<div v-for="(genre,index) in anime.genres" :key="genre" class="single-genre"> {{genre.name}} <span v-if="index < anime.genres.length-1" style="color:blueviolet">&nbsp;|&nbsp;</span></div></div>
                </div>
            </div>
            
           
            
        </div>
    </div>
</template>

<script>
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
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style.css';

</style>