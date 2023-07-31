<template>
    <h1 style="margin-top:30px">
        Welcome to Anime Getter<span style="color:blueviolet">{{username}}</span>.
    </h1>
    <h1>
        Recommended for you: 
    </h1>
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
        <CardComponent :animeList="recs" />
    </div>
</template>
  
<script>

import CardComponent from '@/components/CardComponent.vue'
  
export default {
name: 'HomePlaceholder',
components:{
    CardComponent
},
data(){
    return{
        recs:[]

    }
  },
methods:{
    async getTop(){

    const request = await fetch(`/api/getTopAnime?page=1&limit=6`)
    const response = await request.json()
    console.log(response)
    this.recs = response.data

    },
},
mounted(){
    this.getTop()
},
computed:{
    username(){return this.$store.getters.usernameGetter ? ' ' + this.$store.getters.usernameGetter : ''}
    
}
}


</script>
  