<template>
  <div class="question">
    <div v-if="whichType()">
      <h3 > {{ quizName }} </h3>
      <label class="ceil-left topper"> Try another topic </label> 
      <select v-on:change="onChange" class="ceil-left" >
        <option disabled>Select Another </option>
        <option v-for="type of types" :value="type">{{type}}</option>
      </select>
    </div>
    <div v-else>
      <h3 > Top 200 </h3>
    </div>
    <component v-if="collection.length>2" :is="currentFormat" :answer="collection[random]" ></component>
    <choices :collection="collection" :tagname="tagname" :answer="collection[random]" ></choices>
    <ui-button class="ceil-right" @click="switchFormat" color="primary" raised >Brand/Gen</ui-button>
  </div>
</template>

<script>

import store from '../store'
import { actions } from '../actions'
const { fetch } = actions

export default {
  name: 'question',
  computed: {
    random () {
      return store.state.random
    },
    collection () {
      return store.state.collection
    },
    types () {
      return store.state.types
    },
    currentFormat () {
      return store.getters.activated
    },
    quizName () {
      return store.state.quizName
    },
    tagname () {
      return store.getters.tagName
    },
    endpoint () {
      return store.state.endpoint
    }
  },
  methods: {
    whichType () {
      return location.hash.includes('type')
    },
    switchFormat () {
      return store.commit('swapFormat')
    },
    onChange (e) {
      console.log('handle select ', e.target.value)
      store.commit('setName', e.target.value)
      fetch()
    }
  },
  data () {
    return {
      msg: '** Quiz Name **'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ceil-left {
  left: 12px;
  top: 24px;
  position: fixed;
}
.topper {
  left: 36px;
  top: 5px;
}
.ceil-right {
  right: 12px;
  top: 12px;
  position:fixed;
}
.floor-right {
  right: 12px;
  bottom: 12px;
  position:fixed;
}
h1, h2 {
  margin-top: -36px;
  font-weight: normal;
}
a, h3 {
  color: #42b983;
}
</style>
