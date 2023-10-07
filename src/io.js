import io from "socket.io-client"
const { VUE_APP_HOME_AUTOMATION_API_URL } = process.env

export const socket = io(VUE_APP_HOME_AUTOMATION_API_URL, {
  autoConnect: false,
  transports: ["polling", "websocket"],
  transportOptions: {
    polling: {
      extraHeaders: {},
    },
  },
})
