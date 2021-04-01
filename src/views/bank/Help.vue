<template>
  <app-page back>
    <question-item v-for="q in questions" :key="q.id" :question="q" />
  </app-page>
</template>

<script>
import QuestionItem from '../../components/question/QuestionItem.vue'
import AppPage from '../../components/ui/AppPage.vue'

export default {
  components: { AppPage, QuestionItem },
  name: 'Help',
  setup () {
    const questions = [
      { id: 1, title: 'question 1', text: 'answer 1' },
      { id: 2, title: 'question 2', text: 'answer 2' }
    ]
    return { questions }
  }
}
</script>

<style scoped></style>
