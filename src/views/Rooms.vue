<template>
  <div class="location_view">
    <h1>Rooms</h1>
    
    <p v-if="$store.state.rooms.length === 0">
      <Loader >Waiting for AI results</Loader>
    </p>


    <div
      class=""
      v-for="room in $store.state.rooms"
      v-bind:key="room.name">
      <h2>{{room.name}}</h2>
      <p>Occupants: {{room.occupants}}</p>

    </div>
  </div>

</template>

<script>
import Loader from '@moreillon/vue_loader'
export default {
  name: 'home',
  components: {
    Loader
  },
  data(){
    return {

    }
  },

}
</script>

<style scoped>

</style>
