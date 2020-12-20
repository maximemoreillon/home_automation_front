<template>
  <div class="location_view">
    <h1>Controls</h1>
    <p v-if="enabled">Automations enabled</p>
    <p v-else>Automations disabled</p>

    <button type="button" @click="set_enabled(!enabled)">{{enabled?'Disable':'Enable'}}</button>

  </div>

</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data(){
    return {
      enabled: false,
    }
  },
  mounted(){
    this.check_enabled();
  },
  methods: {
    check_enabled(){
      const url = `${process.env.VUE_APP_HOME_AUTOMATION_API_URL}/enabled`
      this.axios.get(url)
      .then(response => {this.enabled = response.data})
      .catch(error => {
        alert('Something went wrong');
        console.error(error)
      })
    },
    set_enabled(enabled){
      const url = `${process.env.VUE_APP_HOME_AUTOMATION_API_URL}/enabled`
      this.axios.put(url, {enabled:enabled})
      .then(response => {this.enabled = response.data})
      .catch(error => {
        alert('Something went wrong');
        console.error(error)
      })
    }
  }

}
</script>

<style scoped>
.current_location_wrapper {
  margin-top: 2em;
  text-align: center;
}

.current_location_image {
  width: 50vw;
  height: 50vh;
  object-fit: contain;
}

.current_location_legend {
  font-size: 150%;
}
</style>
