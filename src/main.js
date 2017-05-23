// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import KeenUI from 'keen-ui'
Vue.use(KeenUI)

import '../node_modules/keen-ui/dist/keen-ui.min.css'
Vue.config.productionTip = false

import Feedback from './components/Feedback'
import Generic from './components/Generic'
import Choices from './components/Choices'
import Brand from './components/Brand'

Vue.component('feedback', Feedback)
Vue.component('Generic', Generic)
Vue.component('choices', Choices)
Vue.component('Brand', Brand)

import { actions } from './actions'
const { fetch } = actions

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted: () => {
    console.log('[MAIN::MOUNTED]', location)
    fetch('/drugs.json')
  },
  router,
  template: '<App/>',
  components: { App }
})

