<template>
  <v-card :loading="loading">
    <v-toolbar flat>
      <v-card-title> Config </v-card-title>
    </v-toolbar>
    <v-card-text v-for="room in rooms" :key="room.name">
      <h2>{{ room.name }}</h2>
      <v-data-table :headers="headers" :items="room.devices"> </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Config",
  data() {
    return {
      rooms: [],
      loading: false,
      headers: [
        { text: "Type", value: "type" },
        { text: "Status topic", value: "statusTopic" },
        { text: "Command topic", value: "commandTopic" },
      ],
    }
  },
  mounted() {
    this.getRooms()
  },
  methods: {
    async getRooms() {
      this.loading = true
      const { data } = await this.axios.get("/rooms")
      this.rooms = data
      this.loading = false
    },
  },
}
</script>
