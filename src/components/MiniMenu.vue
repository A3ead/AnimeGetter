<template>

    <div class="mini-menu-container" id="mini-menu-container">
        
        <div class="mini-menu" tabindex="0">
            <div class="mini-menu-profile-picture-container"><img class="mini-menu-profile-picture" src="https://cdn.myanimelist.net/images/userimages/3936693.jpg?t=1625842800" alt="" srcset=""></div>
            <div class="mini-menu-items">
                <router-link class="mini-menu-item" to="/">Home</router-link>
                <router-link class="mini-menu-item" to="/top">Top Anime</router-link>
                <router-link class="mini-menu-item" to="/seasonal">Seasonal</router-link>
                <router-link class="mini-menu-item" to="/schedule">Schedule</router-link>
            </div>

        </div>




    </div>

</template>


<script>



export default {
  name: 'miniMenu',
  
  components: {
    
    

  },
    data(){
    return{

    }
  },
  mounted(){

      document.getElementById("mini-menu-container").addEventListener('click', e => {
        if(e.target !== e.currentTarget){}
        else {this.$emit('hideMiniMenu')}
});
  },
  methods:{
   
      
  }
}
</script>