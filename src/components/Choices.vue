<template>
  <div class="choices">

      <ui-modal  ref="modal" title="Answer" @close="closeModal()" >
          <feedback v-if="!!chose.id" :actual="answer"  />
      </ui-modal>

    <div  v-for="(index, item) in collection" >
      <ui-button class="block" @click="openModal(collection[item])" color="primary" raised type="secondary" >{{collection[item][tagname]}}</ui-button> 
    </div>


  </div>
</template>

<script>
import {UiButton, UiModal, UiTab, UiTabs} from 'keen-ui'
import { actions } from '../actions'
const { attempt, fetch } = actions
import store from '../store'

export default {
  name: 'choices',
  props: ['collection', 'tagname', 'answer'],
  computed: {
    chose () {
      return store.state.answered
    }
  },
  methods: {
    openModal (indy) {
      attempt(indy)
      this.$refs['modal'].open()
    },
    closeModal () {
      fetch('/drugs.json')
      this.$refs['modal'].close()
    }
  },
  data () {
    return {
      msg: '** Quiz Name **'
    }
  },
  components: {
    UiButton,
    UiModal,
    UiTab,
    UiTabs
  }
}
</script>

<style scoped>
.block {
  width: 30%;
  margin: 12px;
}

</style>
