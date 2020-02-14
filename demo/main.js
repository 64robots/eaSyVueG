import Vue from 'vue'
import App from './App'

if (process.env.VUE_APP_E2E) {
  if (window.__e2e_lib) {
    Vue.use(require('easyvueg').default)
  } else if (window.__e2e_components) {
    Vue.component('VPath', require('easyvueg.v-path').default)
    Vue.component('VRect', require('easyvueg.v.rect').default)
  }
} else {
  // Install the plugin directly from src in development
  Vue.use(require('../src').default)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
