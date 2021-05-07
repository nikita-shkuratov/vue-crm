<template>
  <div class="filter">
    <div class="form-control">
      <input
        class="bankInput"
        type="text"
        placeholder="Please enter name"
        v-model="name"
      />
    </div>

    <div class="form-control">
      <select v-model="status" class="bankInput">
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
.bankInput {
  background: #ffffff !important;
  border: 1px solid #b7c3d6 !important;
  box-sizing: border-box !important;
  border-radius: 40px !important;
  height: 50px !important;
  padding: 0px 20px !important;

  &:focus {
    outline: none !important;
    border: 1px solid #5db678 !important;
    box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5) !important;
    box-sizing: border-box !important;
    border-radius: 40px !important;
    height: 50px !important;
  }
}

.filter {
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
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
select {
  display: block !important;
}
</style>
