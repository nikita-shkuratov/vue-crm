<template>
  <div>
    <div class="page-title">
      <h3>Detail</h3>
    </div>
    <app-loader v-if="loading" />
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
 {{ record.type === 'income' ? 'Income' : 'Outcome' }}
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
              <p>Category: {{ record.categoryName }}</p>
              <p>Description: {{ record.description }}</p>
              <p>Amount: {{ record.amount }}</p>
              <small>{{ record.date }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Record с id={{ $route.params.id }} not found!</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
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

    onMounted(async () => {
      const id = route.params.id
      record.value = await store.dispatch('record/fetchRecordById', id)
      const category = await store.dispatch(
        'category/fetchCategoryById',
        record.value.categoryId
      )

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
