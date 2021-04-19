<template>
  <app-page back>
    <question-item v-for="q in questions" :key="q.id" :question="q" />
  </app-page>
</template>

<script>
import QuestionItem from '../../components/bank/question/QuestionItem.vue'
import AppPage from '../../components/ui/AppPage.vue'

export default {
  components: { AppPage, QuestionItem },
  name: 'Help',
  setup () {
    const questions = [
      {
        id: 1,
        title: 'What design pattern is Vue based on?',
        text:
          'Vue.js is based on the Model-View-ViewModel (aka MVVM) design pattern, the main motivation for this pattern is to separate the model from the view.'
      },
      {
        id: 2,
        title: 'What are the component lifecycle hooks in Vue.js?',
        text:
          'beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, destroyed, errorCaptured'
      },
      {
        id: 3,
        title: 'What is Vuex?',
        text:
          'Vuex is a state management template and library for Vue.js applications. It is designed to store basic data for all components of the application and ensures predictability of reactive data changes.'
      },
      {
        id: 4,
        title: 'How to implement client side routing in Vue?',
        text:
          'The recommended way to do SPA is to use Vue Router, which is the official routing library but not included in the main framework.'
      },
      {
        id: 5,
        title: 'How do I conditionally render a component?',
        text:
          'Use v-if and v-else directives, the component will be removed from the dom if you pass a false condition to it. The css display property can be used to store an element in the v-show DOM directive '
      }
    ]
    return { questions }
  }
}
</script>

<style scoped></style>
