// actions.js
import axios from 'axios'

import store from './store'

export const actions = {
  fetch: (url) => {
    return axios.get(url + '?type=' + store.getters.quizType)
    .then((res) => {
      store.commit('attempt', {})
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

