<template>
  <div>
    <div class="page-title">
      <h3>New entry</h3>
    </div>

    <app-loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      There are no categories yet.
      <router-link to="/crm/categories">Add a new category</router-link>
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
          <span>Outcome</span>
        </label>
      </p>
      <small class="error-message" v-if="typeError">{{ typeError }}</small>

      <div class="input-field">
         <label for="amount">Summ</label>
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="['myInput', { invalid: amountError }]"
          @blur="amountBlur"
        />
        <small class="error-message" v-if="amountError">{{
          amountError
        }}</small>
      </div>

      <div class="input-field">
        <label for="description">Description</label>
        <input
          id="description"
          type="text"
          v-model="description"
          :class="['myInput', { invalid: descriptionError }]"
          @blur="titleBlur"
        />
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
import { ref, onMounted, onUnmounted } from 'vue'
import AppLoader from '../components/ui/AppLoader.vue'
import { useStore } from 'vuex'
import { useRecordForm } from '../helpers/record.form'

export default {
  components: { AppLoader },
  name: 'record',
  setup () {
    const store = useStore()
    const loading = ref(true)
    const select = ref(null)
    const categories = ref([])
    const category = ref(null)
    const myBill = ref(null)

    onMounted(async () => {
      categories.value = await store.dispatch('category/fetchCategories') || []
      myBill.value = store.getters.getUser.bill

      setTimeout(() => {
        // eslint-disable-next-line
        select.value = M.FormSelect.init(select.value)
        // eslint-disable-next-line
        M.updateTextFields()
      }, 0)
      loading.value = false
    })

    const submit = async values => {
      const { amount, description, type } = values
      const checkBill = type === 'income' ? true : myBill.value >= amount
      const categoryName = categories.value.filter(
        cat => cat.id === category.value
      )[0].title
      if (checkBill) {
        try {
          await store.dispatch('record/createRecord', {
            categoryId: category.value,
            categoryName,
            amount,
            description,
            type,
            date: new Date().toJSON()
          })
          const bill =
            type === 'income' ? myBill.value + amount : myBill.value - amount
          await store.dispatch('updateMyBill', bill)
        } catch (e) {}
      } else {
        store.dispatch('setMessage', {
          value: `Insufficient funds in the account (${amount - myBill.value})`,
          type: true
        })
      }
    }

    onUnmounted(() => {
      if (select.value && select.value.destroy) {
        select.value.destroy()
      }
    })

    return {
      loading,
      select,
      categories,
      category,
      ...useRecordForm(submit)
    }
  }
}
</script>
