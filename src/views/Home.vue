<template>
  <v-card max-width="50rem" class="mx-auto">
    <v-toolbar flat>
      <v-card-title> Location </v-card-title>
      <v-spacer />
      <MasterControls />
    </v-toolbar>

    <h2 class="text-center py-6">
      Current location: {{ $store.state.location }}
    </h2>
  </v-card>
</template>

<script>
import MasterControls from "../components/MasterControls.vue"
export default {
  name: "home",
  components: { MasterControls },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style scoped>
.current_location_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
