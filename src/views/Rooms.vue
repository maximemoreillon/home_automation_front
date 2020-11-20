<template>
  <div class="location_view">
    <h1>Rooms</h1>

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
export default {
  name: 'home',
  components: {

  },
  data(){
    return {

    }
  },

}
</script>

<style scoped>

</style>
