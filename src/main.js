import Vue from "vue";
import App from "./App.vue";

import VModal from "vue-js-modal";
import vClickOutside from "v-click-outside";

Vue.config.productionTip = false;

Vue.use(VModal, vClickOutside);
Vue.use(vClickOutside);

new Vue({
  render: h => h(App)
}).$mount("#app");
