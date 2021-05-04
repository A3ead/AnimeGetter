<template>
<div>branch-1</div>
 <div class='search-div'>
   <div>useless div again</div>
        <div class='title-and-menu'>
            <a class='website-title' href="index.html">ANIME GETTER</a>
              <div id="nav">
                  <router-link class="menu-item" to="/">Home</router-link>
                  <router-link class="menu-item" to="/top">Top Anime</router-link>
                  <router-link class="menu-item" to="/schedule">Schedule</router-link>
                  <router-link class="menu-item" to="/seasonal">Seasonal</router-link>
              </div>
        </div>


        <div>
            <input type="text" id = 'search' class='search-input' v-model="userInput" @keydown.enter="getdata()">
            <button class='button' v-on:click='getdata()'>Show Data</button>
        </div>

    </div>

  <router-view/>
</template>

<script>
import axios from 'axios'

export default {

  data(){
    return{
      fetcheddata:{title:'',synopsis:'',episodes:'',rating:'',image:'',imagelink:''},
      userInput:null
    }
  },
  methods:{
    getdata(){
        //  let trolllist = ['Domestic Girlfriend', 'Boku no Pico', 'Redo of a Healer', 'Ishozuku Reviewers', 'Naruto', 'One Piece', 'konosuba']
        //  const random = Math.floor(Math.random() * trolllist.length);
        //   this.userInput = trolllist[random]
      let OGanimeID = this.userInput
      console.log(OGanimeID)
      axios.get(`http://127.0.0.1:3000/anime?anime=${OGanimeID}`)
      .then(response=> 
      {
        let currentData = response.data
        this.fetcheddata.title = currentData.title
        this.fetcheddata.synopsis = currentData.synopsis
        this.fetcheddata.episodes = currentData.episodes
        this.fetcheddata.rating = currentData.score
        this.fetcheddata.image = currentData.image_url
      //  this.fetcheddata.imagelink.setAttribute('href',OGanimeID)
      this.$store.commit('changeFetcheddata',this.fetcheddata)
     })

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  margin-left: 1px;
  padding: 20px;
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.205);
  margin-left: 0px;
  margin-right: 14px;
  border: solid 1px #ffffff;
  border-radius: 5px;
}

#nav a:hover{
  background-color: rgba(255, 255, 255, 0.411);
  margin-left: 0px;
  margin-right: 14px;
  border: solid 1px #ffffff;
  border-radius: 5px;

}
</style>
