<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Edit</h4>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <select ref="select" v-model="selectData">
            <option v-for="c of categories" :key="c.id" :value="c.id">{{
              c.title
            }}</option>
          </select>
          <label>Select a category</label>
        </div>

        <div class="input-field">
          <label for="title">Change Title</label>
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
        <button class="btn waves-effect waves-light" type="submit">
          Update
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useCategoryForm } from '../../../helpers/categories.form'

export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },

  setup (props, context) {
    const store = useStore()
    const select = ref(null)
    const selectData = ref('')

    watch(selectData.value, value => {
      const { title, limit } = props.categories.find(c => c.id === value)
      title.value = title
      limit.value = limit
    })

    const submit = async values => {
      await store.dispatch('category/updateCategory', {
        ...values,
        id: selectData.value
      })
    }

    onMounted(async () => {
      // eslint-disable-next-line
      M.FormSelect.init(select.value)
      // eslint-disable-next-line
      M.updateTextFields()
    })

    onUnmounted(() => {
      if (select.value && select.value.destroy) {
        select.value.destroy()
      }
    })

    return {
      select,
      selectData,
      ...useCategoryForm(submit)
    }
  }
}
</script>
