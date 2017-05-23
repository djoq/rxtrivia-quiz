// mutations.js
export const mutations = {
  another: (state, question) => {
    state.question = question
  },
  bump: (state, collection) => {
    // console.log('[BUMP::QUESTION]', collection)
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
  }
}
