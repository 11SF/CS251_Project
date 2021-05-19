import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

axios.defaults.baseURL = "https://cs251-backend.herokuapp.com/api"
// axios.defaults.baseURL = "http://127.0.0.1:5000/api"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
