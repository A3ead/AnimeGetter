export default {
    methods:{
        pushing(AG_ID){
            this.$router.push({name:'Anime Info',query:{AG_ID:AG_ID}})            
          },
          hrefLinkAnime(AD_ID){
            return `http://localhost:8080/info?AG_ID=${AD_ID}`
        }
    }

}