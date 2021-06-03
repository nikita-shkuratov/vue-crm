<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Create</h4>
      </div>

      <form @submit="onSubmit">
        <div class="input-field">
          <label for="title">Title</label>
          <input
            :class="['myInput', { invalid: titleError }]"
            type="text"
            id="title"
            v-model="title"
            @blur="titleBlur"
          />
          <small class="error-message" v-if="titleError">{{
            titleError
          }}</small>
        </div>

        <div class="input-field">
          <label for="limit">Limit</label>
          <input
            :class="['myInput', { invalid: limitError }]"
            type="number"
            id="limit"
            v-model="limit"
            @blur="limitBlur"
          />
          <small class="error-message" v-if="limitError">{{
            limitError
          }}</small>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          :disabled="isSubmitting"
        >
          Create
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useCategoryForm } from '../../../helpers/categories.form'

export default {
  emits: ['created'],
  setup (_, { emit }) {
    const store = useStore()

    const submit = async (values, { resetForm }) => {
      const category = await store.dispatch('category/createCategory', values)
      emit('created', category)
      resetForm()
    }
    onMounted(async () => {
      // eslint-disable-next-line
      M.updateTextFields()
    })
    return {
      ...useCategoryForm(submit)
    }
  }
}
</script>
