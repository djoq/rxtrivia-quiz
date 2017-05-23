<template>
  <div class="brand">
    <h4>What is the brand name for {{answer.gen}} ? </h4>
  </div>
</template>

<script>

export default {
  name: 'brand',
  props: ['answer'],
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
