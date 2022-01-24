import { createApp } from "vue";
import App from "./components/App";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import Echo from "laravel-echo";

const app = createApp(App);
app.use(router);
let api = axios.create({
    baseURL: "http://localhost:8000/",
});
app.use(VueAxios, api);
app.mount("#app");

window.Pusher = require("pusher-js");
console.log(process.env.MIX_PUSHER_APP_CLUSTER);
window.Echo = new Echo({
    broadcaster: "pusher",
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: false,
});
