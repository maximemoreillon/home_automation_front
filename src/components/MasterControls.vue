<template>
  <v-switch
    class="pt-6"
    label="Automations"
    v-model="enabled"
    @change="set_enabled()"
  ></v-switch>
</template>

<script>
export default {
  name: "MasterControl",

  computed: {
    enabled: {
      get() {
        return this.$store.state.enabled
      },
      set(newVal) {
        this.$store.commit("set_enabled", newVal)
      },
    },
  },

  mounted() {
    this.check_enabled()
  },
  methods: {
    check_enabled() {
      const url = `/enabled`
      this.axios
        .get(url)
        .then((response) => {
          this.enabled = response.data
        })
        .catch((error) => {
          alert("Something went wrong")
          console.error(error)
        })
    },
    set_enabled() {
      const url = `/enabled`
      this.axios
        .put(url, { enabled: this.enabled })
        .then((response) => {
          this.enabled = response.data
        })
        .catch((error) => {
          alert("Something went wrong")
          console.error(error)
        })
    },
  },
}
</script>
