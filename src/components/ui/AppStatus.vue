<template>
  <div :class="['badge', className]">{{ text }}</div>
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

<style scoped lang="scss">
.badge {
  width: 80px;
  border: 1px solid #b7c3d6;
  border-radius: 24px;
  padding: 3px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  &.primary {
    background: linear-gradient(180deg, #25af86 0%, #7cd46f 100%);
  }
  &.danger {
    background: linear-gradient(180deg, #d40d1e 0%, #e44141 100%);
  }
  &.warning {
    background: linear-gradient(180deg, #d46d0d 0%, #e48241 100%);
  }
}
</style>
