<template>
  <div>
    detail
    <app-loader v-if="loading" />
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/crm/history" class="breadcrumb">История</router-link>
        <a @click.prevent class="breadcrumb">
          {{ record.type === 'income' ? 'Income' : 'Outcome' }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div
            class="card"
            :class="{
              red: record.type === 'outcome',
              green: record.type === 'income'
            }"
          >
            <div class="card-content white-text">
              <p>Description: {{ record.description }}</p>
              <p>Amount: {{ record.amount }}</p>
              <p>Category: {{ record.categoryName }}</p>

              <small>{{ record.date }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Запись с id={{ $route.params.id }} не найдена</p>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppLoader from '../../components/ui/AppLoader.vue'

export default {
  components: { AppLoader },
  name: 'detail',

  setup () {
    const store = useStore()
    const loading = ref(true)
    const record = ref(null)
    const route = useRoute()
    console.log(record.value)

    onMounted(async () => {
      const id = route.params.id
      record.value = await store.dispatch('record/fetchRecordById', id)
      const category = await store.dispatch('category/fetchCategoryById', record.value.categoryId)

      record.value = {
        ...record.value,
        categoryName: category.title
      }

      loading.value = false
    })

    return {
      record,
      loading
    }
  }
}
</script>
