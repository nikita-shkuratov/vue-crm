import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'
import toolTip from './directives/tooltip.directive'

createApp(App)
  .use(store)
  .use(router)
  .directive('tooltip', { ...toolTip })
  .mount('#app')
