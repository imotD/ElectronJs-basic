import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";

import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBk_9LK6YVS1AE8NtTO-aQGxmOkeEp2KF8",
  authDomain: "vue-auth-crud.firebaseapp.com",
  projectId: "vue-auth-crud",
  storageBucket: "vue-auth-crud.appspot.com",
  messagingSenderId: "686207912406",
  appId: "1:686207912406:web:71549a302fa0a2e70a3c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  app,
  render: h => h(App)
}).$mount("#app");
