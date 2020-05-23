import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLink, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
