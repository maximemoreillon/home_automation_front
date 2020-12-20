<template>
  <div id="app">
    <AppTemplate
      authenticate
      applicationName="Home automation">

      <template v-slot:navigation>

        <router-link :to="{name: 'home'}">
          <span>Location</span>
        </router-link>

        <router-link :to="{name: 'controls'}">
          <span>Settings</span>
        </router-link>

        <router-link :to="{name: 'occupancy'}">
          <span>Occupancy</span>
        </router-link>

        <router-link :to="{name: 'about'}">
          <span>About</span>
        </router-link>



      </template>

    </AppTemplate>

  </div>
</template>

<script>
//import AppTemplate from '@moreillon/vue_application_template'
import AppTemplate from '@moreillon/vue_application_template_flex'

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
