import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask'



Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueTheMask)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
