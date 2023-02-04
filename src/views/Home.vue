<template>
  <v-card max-width="50rem" class="mx-auto">
    <v-toolbar flat>
      <v-card-title> Location </v-card-title>
      <v-spacer />
      <MasterControls />
    </v-toolbar>
    <v-card-text>
      <div class="current_location_wrapper">
        <img class="current_location_image" :src="location_image_src" alt="" />
        <p class="current_location_legend">{{ $store.state.location }}</p>
      </div>
    </v-card-text>
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
  computed: {
    location_image_src() {
      switch (this.$store.state.location) {
        case "living":
          return require("@/assets/locations/living.svg")
        case "kitchen":
          return require("@/assets/locations/kitchen.svg")
        case "bathroom":
          return require("@/assets/locations/bathroom.svg")
        case "toilet":
          return require("@/assets/locations/toilet.svg")
        case "bedroom":
          return require("@/assets/locations/bedroom.svg")
        case "corridor":
          return require("@/assets/locations/corridor.svg")
        case "out":
          return require("@/assets/locations/location-exit.svg")
        default:
          return require("@/assets/locations/crosshairs-question.svg")
      }
    },
  },
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
