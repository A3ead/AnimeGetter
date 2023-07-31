<template>
  <div class="home">
    <HomeWelcome/>
    <!-- <DataGetter/>
    <ListShower/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import DataGetter from '@/components/DataGetter.vue'
// import ListShower from '@/components/ListShower.vue'
import HomeWelcome from '../components/HomeWelcome.vue';

export default {
  name: 'Home',
  components: {
    // DataGetter,
    // ListShower
    HomeWelcome
  }
}
</script>
