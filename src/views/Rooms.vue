<template>
  <v-card :loading="loading">
    <v-toolbar flat>
      <v-toolbar-title> Rooms </v-toolbar-title>
      <v-spacer />
      <NewRoomDialog />
    </v-toolbar>
    <v-card-text>
      <!-- <v-data-table :headers="headers" :items="rooms">
        <template v-slot:item.name="{ item }">
          <RouterLink :to="{ name: 'room', params: { _id: item._id } }">{{
            item.name
          }}</RouterLink>
        </template>
      </v-data-table> -->
      <v-row>
        <v-col v-for="room in rooms" :key="room._id">
          <v-card outlined :to="{ name: 'room', params: { _id: room._id } }">
            <v-card-title>
              {{ room.name }}
            </v-card-title>
            <v-card-text> Devices: {{ room.devices.length }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import NewRoomDialog from "../components/NewRoomDialog.vue"

export default {
  name: "Rooms",
  components: {
    NewRoomDialog,
  },
  data() {
    return {
      rooms: [],
      loading: false,
      headers: [
        { text: "Name", value: "name" },
        // { text: "Type", value: "type" },
        // { text: "Status topic", value: "statusTopic" },
        // { text: "Command topic", value: "commandTopic" },
      ],
    }
  },
  mounted() {
    this.getRooms()
  },
  methods: {
    async getRooms() {
      this.loading = true
      try {
        const { data } = await this.axios.get("/rooms")
        this.rooms = data
      } catch (error) {
        alert("Failed to get rooms")
      } finally {
        this.loading = false
      }
      // this.devices = data.reduce(
      //   (prev, room) => [
      //     ...prev,
      //     ...room.devices.map((d) => ({ room: room.name, ...d })),
      //   ],
      //   []
      // )
    },
  },
}
</script>
