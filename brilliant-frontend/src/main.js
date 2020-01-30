import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SocialSharing)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
