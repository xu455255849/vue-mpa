import Vue from "vue";
import App from "./other";
//import store from "./store";
//import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  //store,
  render: h => h(App)
}).$mount("#app");
