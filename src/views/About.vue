<template>
  <div class="about">
    <h1>Home automation GUI</h1>
    <p>Develpped and maintained by Maxime MOREILLON</p>
    <p>Version: {{version}}</p>
    <p>API URL: {{home_automation_api_url || 'UNDEFINED'}}</p>
    <p>Authentication API URL: {{authentication_api_url || 'UNDEFINED'}}</p>
    <p></p>
  </div>
</template>

<script>
import pjson from '../../package.json'
export default {
  name: 'home',
  data(){
    return {
      version: pjson.version,
      home_automation_api_url: process.env.VUE_APP_HOME_AUTOMATION_API_URL,
      authentication_api_url: process.env.VUE_APP_AUTHENTICATION_API_URL,
    }
  },

}
</script>

<style scoped>

</style>
