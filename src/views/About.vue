<template>
  <v-card max-width="50rem" class="mx-auto">
    <v-card-title> Home automation GUI </v-card-title>
    <v-card-text>
      <p>Develpped and maintained by Maxime MOREILLON</p>
      <p>Version: {{ version }}</p>
      <p>API URL: {{ home_automation_api_url || "UNDEFINED" }}</p>
      <p>Login URL: {{ login_url || "UNDEFINED" }}</p>
      <p>Identification URL: {{ login_url || "UNDEFINED" }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import pjson from "../../package.json"
export default {
  name: "home",
  data() {
    return {
      version: pjson.version,
      home_automation_api_url: process.env.VUE_APP_HOME_AUTOMATION_API_URL,
      login_url: process.env.VUE_APP_LOGIN_URL,
      identification_url: process.env.VUE_APP_IDENTIFICATION_URL,
    }
  },
}
</script>

<style scoped></style>
