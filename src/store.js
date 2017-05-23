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
    collection: {},
    answered: {},
    random: 0,
    endpoint: '/tops.json',
    quizName: 'Alzheimers and Parkinsons'
  },
  mutations: mutations,
  getters: {
    activated: state => {
      return state.available[state.kind]
    },
    tagName: state => {
      return state.tags[state.kind]
    }
  }
})

export default store
