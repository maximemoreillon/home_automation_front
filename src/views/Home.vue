<template>
  <div class="current_location_wrapper">
    <img class="current_location" :src="location_image_src" alt="">
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data(){
    return {
      current_location: 'unknown'
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    location(message){
      this.current_location = message
    }
  },
  computed: {
    location_image_src(){

      switch (this.current_location) {
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
        case 'out':
          return require('@/assets/locations/location-exit.svg')
        default:
          //return require('@/assets/locations/location-exit.svg')
          return require('@/assets/locations/crosshairs-question.svg')
      }
    }
  }

}
</script>

<style scoped>
.current_location_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.current_location {
  width: 70vw;
  height: 60vh;
  object-fit: contain;
}
</style>
