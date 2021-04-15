<template>
  <div>
    <div class="page-title">
      <h3>New entry</h3>
    </div>

    <app-loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      There are no categories yet.
      <router-link to="/categories">Add a new category</router-link>
    </p>

    <form class="form" v-else @submit.prevent="onSubmit">
      <div class="input-field">
        <select ref="select" v-model="category">
          <option v-for="c in categories" :key="c.id" :value="c.id">{{
            c.title
          }}</option>
        </select>
        <label>Select a category</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>Income</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>Expenditure</span>
        </label>
      </p>
      <small class="error-message" v-if="typeError">{{ typeError }}</small>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="['myInput', { invalid: amountError }]"
          @blur="amountBlur"
        />
        <label for="amount">Summ</label>
        <small class="error-message" v-if="amountError">{{
          amountError
        }}</small>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="['myInput', { invalid: descriptionError }]"
          @blur="titleBlur"
        />
        <label for="description">Description</label>
        <small class="error-message" v-if="descriptionError">{{
          descriptionError
        }}</small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Create
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import AppLoader from '../../components/ui/AppLoader.vue'
import { useStore } from 'vuex'
import { useRecordForm } from '../../helpers/record.form'

export default {
  components: { AppLoader },
  name: 'record',
  setup () {
    const store = useStore()
    const loading = ref(true)
    const selectData = ref('')
    const select = ref(null)
    const categories = ref([])
    const category = ref(null)
    const type = ref('outcome')
    const amount = ref(1)
    const description = ref('')
    const myBill = ref(null)

    onMounted(async () => {
      store.dispatch('category/fetchCategories')
      categories.value = store.getters['category/getCategories']
      myBill.value = store.getters.getMyBill
      loading.value = false
      if (categories.value.length) {
        category.value = categories.value[0].id
      }

      setTimeout(() => {
        // eslint-disable-next-line
        select.value = M.FormSelect.init(select.value)
        // eslint-disable-next-line
        M.updateTextFields()
      }, 0)
    })

    const canCreateRecord = computed(() => {
      if (type.value === 'income') {
        return true
      }
      return myBill.value >= amount.value
    })

    const submit = async values => {
      const { amount, description, type } = values

      if (canCreateRecord.value) {
        try {
          await store.dispatch('record/createRecord', {
            categoryId: category.value,
            amount,
            description,
            type,
            date: new Date().toJSON()
          })

          /* const bill =
            values.type === 'income'
              ? myBill.value + values.amount
              : myBill.value - values.amount

          await store.dispatch('updateMyBill', { bill }) */
        } catch (e) {}
      } else {
        console.log(
          `Недостаточно средств на счете (${amount.value - myBill.value})`
        )
      }
    }

    onUnmounted(() => {
      if (select.value && select.value.destroy) {
        select.value.destroy()
      }
    })

    return {
      loading,
      selectData,
      select,
      categories,
      category,
      type,
      amount,
      description,
      ...useRecordForm(submit)
    }
  }
}
</script>
