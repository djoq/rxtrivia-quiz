// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {UiButton, UiModal, UiTab, UiTabs} from 'keen-ui'

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
Vue.component('ui-button', UiButton)
Vue.component('ui-modal', UiModal)

import { actions } from './actions'
const { fetch } = actions
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted: () => {
    console.log('[MAIN::MOUNTED]', location)
    if (location.hash.includes('type')) store.commit('setName', location.hash.split('=')[1])
    fetch()
  },
  router,
  template: '<App/>',
  components: { App, UiTab, UiTabs }
})
