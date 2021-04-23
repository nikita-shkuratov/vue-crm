<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="question-title">{{ question.title }}</div>
    <div class="question-budy" v-if="isOpen">{{ question.text }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['question'],
  setup () {
    return { isOpen: ref(false) }
  }
}
</script>

<style scoped lang="scss">
.question {
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question-title {
  width: 40%;
  border-radius: 25px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  box-shadow: 0px 4px 15px rgba(6, 12, 8, 0.5);
  cursor: pointer;
}
.question-budy {
  width: 40%;
  border-radius: 25px;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  color: #90949f;
  box-shadow: 0px 4px 15px rgba(6, 12, 8, 0.5);
}
</style>
