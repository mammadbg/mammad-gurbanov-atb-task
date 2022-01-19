import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";



import('./assets/styles/icons.css')
import('./assets/styles/fonts.css')
import('./assets/styles/main.scss')
Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
