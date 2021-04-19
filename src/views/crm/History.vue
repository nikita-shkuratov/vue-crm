<template>
  <div>
    <div class="page-title">
      <h3>Record history</h3>
    </div>

    <app-loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      Записей пока нет.
      <router-link to="/record">Добавьте первую</router-link>
    </p>

    <section v-else>
      <history-table :records="records" />
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import AppLoader from '../../components/ui/AppLoader.vue'
import HistoryTable from '../../components/crm/HistoryTable/HistoryTable.vue'

export default {
  name: 'history',
  components: {
    AppLoader,
    HistoryTable
  },

  setup () {
    const store = useStore()
    const loading = ref(true)
    const records = ref([])

    onMounted(async () => {
      store.dispatch('record/fetchRecords')
      records.value = store.getters['record/getRecords']
      console.log(records.value)
      store.dispatch('category/fetchCategories')

      loading.value = false
    })

    return {
      loading,
      records
    }
  }
}
</script>
