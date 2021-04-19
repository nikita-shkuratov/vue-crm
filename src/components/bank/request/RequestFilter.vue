<template>
  <div class="filter">
    <div class="form-control">
      <input
        class="myInput"
        type="text"
        placeholder="Please enter name"
        v-model="name"
      />
    </div>
    <div class="form-control">
      <select v-model="status" class="myInput">
        <option disabled selected>Select a status</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <div class="form-control">
      <button class="button" v-if="isActive" @click="reset">Clear</button>
    </div>
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

<style scoped lang="scss">
.myInput {
  background: #ffffff;
  border: 1px solid #b7c3d6;
  box-sizing: border-box;
  border-radius: 40px;
  height: 50px;
  padding: 0px 20px;

  &:focus {
    outline: none;
    border: 1px solid #5db678;
    box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
    box-sizing: border-box;
    border-radius: 40px;
    height: 50px;
  }
}

.filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.form-control {
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(180deg, #25af86 0%, #7cd46f 100%);
  border-radius: 24px;
  border: 1px solid #ffffff;
  width: 150px;
  height: 48px;
  color: #ffffff;
  &:focus {
    outline: none;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
  }
}
</style>
