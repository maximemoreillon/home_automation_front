<template>
  <v-dialog max-width="50rem" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="primary" dark>
        <v-icon left>mdi-plus</v-icon>
        <span>New</span>
      </v-btn>
    </template>

    <v-card>
      <v-card-title> New room </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="createRoom()">
          <v-row align="center">
            <v-col>
              <v-text-field autofocus label="Name" v-model="new_room.name" />
            </v-col>
            <v-col cols="auto">
              <v-btn color="primary" type="submit" :loading="loading">
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NewFoodDialog",

  data: () => ({
    loading: false,
    new_room: {
      name: "",
    },
    dialog: false,
  }),

  methods: {
    createRoom() {
      this.loading = true

      this.axios
        .post(`/rooms`, this.new_room)
        .then(({ data }) => {
          this.$router.push({ name: "room", params: { _id: data._id } })
        })
        .catch((error) => {
          alert(`Room creation failed`)
          console.error(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  computed: {},
}
</script>
