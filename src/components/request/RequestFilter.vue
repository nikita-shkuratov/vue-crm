<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Please enter name" v-model="name" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Select a status</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button v-if="isActive" @click="reset">Clear</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup (_, { emit }) {
    const name = ref('')
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)
    const reset = () => {
      name.value = ''
      status.value = null
    }

    return {
      name,
      status,
      isActive,
      reset
    }
  }
}
</script>

<style scoped></style>
