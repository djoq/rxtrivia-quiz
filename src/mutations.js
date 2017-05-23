// mutations.js
export const mutations = {
  another: (state, question) => {
    state.question = question
  },
  bump: (state, collection) => {
    let setter = state
    setter['collection'] = collection
    state => setter.collection
  },
  swapFormat: (state) => {
    let setter = state
    setter['kind'] = !state.kind ? 1 : 0
    state => setter.kind
  },
  attempt: (state, pick) => {
    let setter = state
    setter['answered'] = pick
    state => setter.answered
  },
  rng: (state) => {
    let setter = state
    setter['random'] = Math.floor(Math.random() * 4)
    state => setter.random
  },
  mapper: (state, endpoint) => {
    let setter = state
    setter['endpoint'] = endpoint
    state => setter.endpoint
  },
  setName: (state, name) => {
    let setter = state
    setter['quizName'] = name
    state => setter.quizName
  }
}
