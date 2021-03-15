<template>
  <div v-if="message" :class="['message', message.type]">
    <div class="title">{{ message.value }}</div>
    <button class="button" @click="close">Close</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const message = computed(() => store.state.message)
    return { message, close: () => store.commit('clearMessage') }
  }
}
</script>

<style lang="scss" scoped>
.message {
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(251, 2, 2, 0.1);
  border-radius: 15px;
  font-family: 'Didact Gothic', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  padding: 20px;
  width: 650px;
  position: absolute;
  top: 10px;
  left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }
  .button {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background: linear-gradient(180deg, #d40d1e 0%, #e44141 100%);
    border-radius: 24px;
    border: 1px solid #ffffff;
    width: 150px;
    height: 30px;
    color: #ffffff;
    &:focus {
      outline: none;
      border: 1px solid #ffffff;
      box-shadow: 0px 4px 10px rgba(248, 53, 4, 0.5);
    }
  }
}
</style>
