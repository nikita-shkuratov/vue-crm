<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from 'vue'

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

    watch(props, val => {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

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
