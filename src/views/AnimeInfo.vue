<template>
  <div class="anime-info-entire-container">
    <div class="anime-info-title-synopsis-card"> 
        <img class="anime-info-img" src="https://cdn.myanimelist.net/images/anime/1582/101697.jpg" alt="" srcset="">
      <div>
          <div class="anime-info-title">
              <h1>Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen</h1>
              <h4>Ascendance of a Bookworm</h4>
          </div>
          <div class="anime-info-synopsis">
              Urano Motosu loves books and has an endless desire to read literature, no matter the subject. She almost fulfills her dream job of becoming a librarian before her life is ended in an accident. As she draws her last breath, she wishes to be able to read more books in her next life.
              As if fate was listening to her prayer, she wakes up reincarnated as Myne—a frail five-year-old girl living in a medieval era. What immediately comes to her mind is her passion. She tries to find something to read, only to become frustrated by the lack of books at her disposal.
              Without the printing press, books have to be written and copied by hand, making them very expensive; as such, only a few nobles can afford them—but this won't stop Myne. She will prove that her will to read is unbreakable, and if there are no books around, she will make them herself!
          </div>
      </div>
    </div>
    <div class="anime-info-information-card">
      <div class="anime-info-single-info-div">Episodes: 24</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Genres: Action, Fantasy, blabla,  Action, Fantasy, blabla</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">rank: 198</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">score: 8.33</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Studios: Ufotable, A1Pictures, KyoAni</div>
      <span class="anime-info-single-info-div-seperator"></span>
      <div class="anime-info-single-info-div">Status: Finished Airing</div>
    </div>
    <div class="anime-info-related-card">
      <div class="anime-info-single-related"> Adaptation:	Fate/Zero </div>
      <div class="anime-info-single-related">Sequel:	Fate/Zero 2nd Season</div>
      <div class="anime-info-single-related"> Summary:	Fate/Zero Remix</div>
      <div class="anime-info-single-related">Side story:	Fate/Zero: Onegai! Einzbern Soudanshitsu</div>
      <div class="anime-info-single-related"> Other:	Fate/Zero Cafe</div>
      <div class="anime-info-single-related"> Character:	Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note - Hakamori to Neko to Majutsushi, Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note</div>

    </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AnimeInfo',
  
  components: {

  },
    data(){
    return{
      fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
    }
  },
  mounted(){
    let malID = this.$route.query.AG_ID
    console.log(malID);
     (()=>{
      axios.get(`http://127.0.0.1:3000/animeInfo?animeID=${malID}`)
      .then(response=> 
      {
        console.log(response.data)
        let currentData = response.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.score
        this.fetcheddata.image = currentData.image_url
      //  this.fetcheddata.imagelink.setAttribute('href',OGanimeID)
     })
    })()

  }
}
</script>