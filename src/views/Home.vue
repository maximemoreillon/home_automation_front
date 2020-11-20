<template>
  <div class="location_view">
    <h1>Current location</h1>
    <div class="current_location_wrapper">
      <img class="current_location_image" :src="location_image_src" alt="">
      <p class="current_location_legend">{{$store.state.location}}</p>
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
  computed: {
    location_image_src(){

      switch (this.$store.state.location) {
        case 'living':
          return require('@/assets/locations/living.svg')
        case 'kitchen':
          return require('@/assets/locations/kitchen.svg')
        case 'bathroom':
          return require('@/assets/locations/bathroom.svg')
        case 'toilet':
          return require('@/assets/locations/toilet.svg')
        case 'bedroom':
          return require('@/assets/locations/bedroom.svg')
        case 'corridor':
          return require('@/assets/locations/corridor.svg')
        case 'out':
          return require('@/assets/locations/location-exit.svg')
        default:
          return require('@/assets/locations/crosshairs-question.svg')
      }
    }
  }

}
</script>

<style scoped>
.current_location_wrapper {
  margin-top: 2em;
  text-align: center;
}

.current_location_image {
  width: 50vw;
  height: 50vh;
  object-fit: contain;
}

.current_location_legend {
  font-size: 150%;
}
</style>
