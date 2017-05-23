// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { mutations } from './mutations'

const store = new Vuex.Store({
  state: {
    available: ['Brand', 'Generic'],
    types: ['Alzheimers and Parkinsons', 'Diabetes (Type 2)', 'Glaucoma', 'IBD and IBS', 'Insulin', 'MS', 'NSAIDS', 'Opioid and Pain', 'Urinary Incontinence'],
    tags: ['name', 'gen'],
    kind: 0,
    question: 'What is the generic name for...',
    collection: {},
    answered: {}
  },
  mutations: mutations,
  getters: {
    activated: state => {
      return state.available[state.kind]
    },
    tagName: state => {
      return state.tags[state.kind]
    },
    quizType: state => {
      if (location.hash.includes('?')) {
        return location.hash.split('?')[1].split('=')[1]
      } else {
        return 'Alzheimers'
      }
    }
  }
})

export default store
