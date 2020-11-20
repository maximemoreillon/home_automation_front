<template>
  <div id="app">
    <AppTemplate
      applicationName="Home automation"/>

  </div>
</template>

<script>
import AppTemplate from '@moreillon/vue_application_template'

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    AppTemplate
  },
  sockets: {
    connect() {
      console.log('socket connected')
      this.$store.commit('set_connected', true)
    },
    location(message){
      this.$store.commit('set_location', message)
    },
    occupancy(room){
      this.$store.commit('update_occupancy', room)
    }
  },


}
</script>

<style>

</style>
