export default {
    methods:{
        pushing(AG_ID){
            this.$router.push({name:'Anime Info',query:{AG_ID:AG_ID}})            
          }
    }

}