<template>
  <v-card :loading="loading">
    <v-toolbar flat>
      <v-btn icon to="/rooms" exact>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> Room </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="room">
        <v-btn icon @click="updateRoom" :loading="updating">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn icon @click="deleteRoom">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    <v-card-text>
      <template v-if="room">
        <v-row>
          <v-col>
            <v-text-field label="Name" v-model="room.name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="Illuminance"
              :value="room.illuminance"
              type="number"
              readonly
              outlined
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Illuminance threshold"
              v-model.number="room.illuminance_threshold"
              type="number"
            />
          </v-col>
          <v-col cols="auto">
            <v-checkbox label="Night time only" v-model="room.nightOnly" />
          </v-col>
        </v-row>
        <h3 class="my-4">Devices</h3>
        <v-row v-for="(device, index) in room.devices" :key="index">
          <v-col>
            <v-card outlined>
              <v-card-text>
                <v-row align="center">
                  <v-col>
                    <v-text-field v-model="device.name" label="Name" />
                  </v-col>
                  <v-col>
                    <v-select
                      :items="types"
                      v-model="device.type"
                      label="Type"
                    ></v-select>
                  </v-col>

                  <v-col cols="auto">
                    <v-btn icon @click="deleteDevice(index)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-if="device.type !== 'light'">
                    <v-text-field
                      v-model="device.statusTopic"
                      label="Status topic"
                    />
                  </v-col>
                  <v-col v-else>
                    <v-text-field
                      v-model="device.commandTopic"
                      label="Command topic"
                    />
                  </v-col>
                  <v-col cols="auto" v-if="device.type === 'motion sensor'">
                    <v-switch
                      v-model="device.enabled"
                      label="Enabled"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-btn color="primary" @click="addDevice">Add device</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Config",
  data() {
    return {
      room: null,
      loading: false,
      updating: false,
      deleting: false,
      types: ["light", "motion sensor", "illuminance sensor"],
    }
  },
  mounted() {
    this.getRoom()
  },
  methods: {
    async getRoom() {
      this.loading = true
      const { _id } = this.$route.params
      try {
        const { data } = await this.axios.get(`/rooms/${_id}`)
        this.room = data
      } catch (error) {
        alert("Failed to get room")
      } finally {
        this.loading = false
      }
    },
    async updateRoom() {
      this.updating = true
      const { _id } = this.$route.params
      const { illuminance, ...body } = this.room
      try {
        const { data } = await this.axios.patch(`/rooms/${_id}`, body)
        this.room = data
      } catch (error) {
        alert("Failed to get room")
      } finally {
        this.updating = false
      }
    },
    async deleteRoom() {
      if (!confirm(`Delete ${this.room.name}?`)) return
      this.deleting = true
      const { _id } = this.$route.params
      try {
        await this.axios.delete(`/rooms/${_id}`)
        this.$router.push({ name: "rooms" })
      } catch (error) {
        alert("Failed to get room")
      } finally {
        this.deleting = false
      }
    },
    addDevice() {
      this.room.devices.push({
        name: "New device",
        statusTopic: "",
        commandTopic: "",
      })
    },
    deleteDevice(index) {
      if (
        !confirm(
          `Delete device ${this.room.deivces[index].name || "Unnnamed sensor"}?`
        )
      )
        this.room.devices.splice(index, 1)
    },
  },
}
</script>
