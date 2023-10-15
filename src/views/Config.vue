<template>
  <v-card :loading="loading">
    <v-toolbar flat>
      <v-card-title> Devices </v-card-title>
    </v-toolbar>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="devices"
        group-by="room"
        show-group-by
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Config",
  data() {
    return {
      devices: [],
      loading: false,
      headers: [
        { text: "Room", value: "room" },
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
      this.devices = data.reduce(
        (prev, room) => [
          ...prev,
          ...room.devices.map((d) => ({ room: room.name, ...d })),
        ],
        []
      )
      this.loading = false
    },
  },
}
</script>
