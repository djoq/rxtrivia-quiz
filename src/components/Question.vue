<template>
  <div class="question">



  <component v-if="collection.length==4" :is="activeType" :answer="collection[random]" ></component>

  <choices :collection="collection" :tagname="tagname" :answer="collection[random]" ></choices>
  
  <hr />

  <select v-on:change="onChange" class="floor-left">
    <option v-for="type of types" v-value="type">{{type}}</option>
  </select>

  <ui-button class="floor-right" @click="switchFormat" color="primary" raised >Brand/Gen</ui-button>

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
      return 1
    },
    collection () {
      return store.state.collection
    },
    types () {
      return store.state.types
    },
    activeType () {
      return store.getters.activated
    },
    tagname () {
      return store.getters.tagName
    }
  },
  methods: {
    switchFormat () {
      return store.commit('swapFormat')
    },
    onChange (e) {
      console.log('handle select ', e.target.value)
      location.hash = '#/?type=' + e.target.value.split(' ')[0]
      fetch('/drugs.json')
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
.floor-left {
  left: 12px;
  top: 18px;
  position: fixed;
}
.floor-right {
  right: 12px;
  top: 12px;
  position:fixed;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
