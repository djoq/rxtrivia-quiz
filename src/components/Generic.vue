<template>
  <div class="generic">
    <h4>What is the generic name for {{answer.name}} ? </h4>
  </div>
</template>

<script>

export default {
  props: ['answer'],
  name: 'generic',
  data () {
    return {
      msg: '** Quiz Name **'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
