import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: 'unknown',
    connected: false,
    rooms: [],
  },
  mutations: {
    set_location(state,new_location){
      state.location = new_location
    },
    set_connected(state, new_state){
      state.connected = new_state
    },
    update_occupancy(state, room) {
      let found_room = state.rooms.find(existing_room => {
        return existing_room.name === room.name
      })

      if(!found_room) state.rooms.push(room)
      else found_room.occupants = room.occupants
    },
  },
  actions: {
  },
  modules: {
  }
})
