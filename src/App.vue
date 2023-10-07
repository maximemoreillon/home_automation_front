<template>
  <AppTemplate :options="options">
    <template v-slot:nav>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in nav"
          :key="`nav_item_${index}`"
          :to="item.to"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </AppTemplate>
</template>

<script>
import AppTemplate from "@moreillon/vue_application_template_vuetify"
export default {
  name: "App",

  components: {
    AppTemplate,
  },

  data: () => ({
    options: {
      title: "Home automation",
      login_url: process.env.VUE_APP_LOGIN_URL,
      identification_url: process.env.VUE_APP_IDENTIFICATION_URL,
    },

    nav: [
      { title: "Home", to: { name: "home" }, icon: "mdi-home" },
      {
        title: "About",
        to: { name: "about" },
        icon: "mdi-information-outline",
      },
    ],
  }),

  sockets: {
    connect() {
      this.$store.commit("set_connected", true)
      console.log("connected")
    },
    location(message) {
      this.$store.commit("set_location", message)
    },
    enabled(enabled) {
      this.$store.commit("set_enabled", enabled)
    },
  },
}
</script>
