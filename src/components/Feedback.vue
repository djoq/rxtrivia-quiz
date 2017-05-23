<template>
  <div class="feedback">
    <div v-if="answered[tagname] == actual[tagname]" >
      <h3 class="correct"> Correct! </h3>
    </div>
    <div  v-else>
      <h3 class="wrong"> Incorrect </h3>
    </div>
    <p> <small> Selected: </small> {{answered[tagname]}} </p>
    <p> <small> Correct answer: </small> {{actual[tagname]}} </p>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'feedback',
  props: ['actual'],
  computed: {
    answered () {
      return store.state.answered
    },
    tagname () {
      return store.getters.tagName
    }
  },
  data () {
    return {
      msg: 'The correct response after person answers'
    }
  }
}
</script>
<style scoped>
.correct {
    color: green !important;
}
.wrong {
    color: orange !important;
}
p small {
    color: #2196F3 !important;
}

</style>
