<template>
  <div class="home">
    <DataGetter/>
    <ListShower/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataGetter from '@/components/DataGetter.vue'
import ListShower from '@/components/ListShower.vue'

export default {
  name: 'Home',
  components: {
    DataGetter,
    ListShower
  }
}
</script>
