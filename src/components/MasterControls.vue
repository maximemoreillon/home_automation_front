<template>
  <v-switch class="pt-6" label="Automations" v-model="enabled"></v-switch>
</template>

<script>
export default {
  name: "MasterControl",

  data: () => ({
    enabled: false,
  }),
  mounted() {
    this.check_enabled()
  },
  methods: {
    check_enabled() {
      const url = `${process.env.VUE_APP_HOME_AUTOMATION_API_URL}/enabled`
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
    set_enabled(enabled) {
      const url = `${process.env.VUE_APP_HOME_AUTOMATION_API_URL}/enabled`
      this.axios
        .put(url, { enabled: enabled })
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
