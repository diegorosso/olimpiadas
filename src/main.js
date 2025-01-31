import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa Vue Router
import { IonicVue } from '@ionic/vue';  

import '@ionic/vue/css/core.css';
const app = createApp(App);

app.use(IonicVue);
app.use(router); // Usa Vue Router
app.mount("#app");
