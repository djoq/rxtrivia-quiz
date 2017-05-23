import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/Question'
import Choices from '@/components/Choices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Question',
      component: Question
    },
    {
      path: '/choices',
      name: 'Choices',
      component: Choices
    }
  ]
})
