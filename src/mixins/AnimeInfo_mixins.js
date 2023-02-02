export default {
    methods:{
        pushing(AG_ID){
            this.$router.push({name:'Anime Info',query:{AG_ID:AG_ID}})            
          },
          hrefLinkAnime(AD_ID){
            return location.protocol + `/info?AG_ID=${AD_ID}`
        }
    }

}