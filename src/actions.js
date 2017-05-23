// actions.js
import axios from 'axios'

import store from './store'

export const actions = {
  fetch: () => {
    if (location.hash.includes('type')) {
      store.commit('mapper', '/drugs.json')
    } else {
      store.commit('mapper', '/tops.json')
    }
    return axios.get(store.state.endpoint + '?type=' + store.state.quizName.split(' ')[0])
    .then((res) => {
      store.commit('attempt', {})
      store.commit('rng')
      return store.commit('bump', res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  attempt: (pick) => {
    return store.commit('attempt', pick)
  }
}
