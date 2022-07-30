<template>
  <div id="app">
    <AppTemplate :options="options">

      <template v-slot:nav>

        <router-link :to="{name: 'home'}">
          <span>Location</span>
        </router-link>

        <router-link :to="{name: 'controls'}">
          <span>Settings</span>
        </router-link>

        <router-link :to="{name: 'about'}">
          <span>About</span>
        </router-link>



      </template>

    </AppTemplate>

  </div>
</template>

<script>
import AppTemplate from '@moreillon/vue_application_template'

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
  },
  data(){
    return {
      options: {
        authenticate: true,
        title: 'Home automation',
        login_url: process.env.VUE_APP_LOGIN_URL,
        identification_url: process.env.VUE_APP_IDENTIFICATION_URL
      }
    }
  }


}
</script>

<style>

</style>
