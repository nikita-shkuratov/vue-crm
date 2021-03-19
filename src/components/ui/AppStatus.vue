<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    type: String,
    validator (value) {
      return ['active', 'canceled', 'done', 'pending'].includes(value)
    }
  },

  setup (props) {
    const classesMap = {
      active: 'primary',
      canceled: 'danger',
      done: 'primary',
      pending: 'warning'
    }

    const textMap = {
      active: 'active',
      canceled: 'canceled',
      done: 'done',
      pending: 'pending'
    }

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    return {
      className,
      text
    }
  }
}
</script>

<style scoped></style>
