<template>
  <div>
    <div class="page-title">
      <h3>Record history</h3>
    </div>
    <app-loader v-if="loading" />
    <p class="center" v-else-if="!records.length">
      There are no records yet.
      <router-link to="/crm/record">Add the first one</router-link>
    </p>
    <section v-else>
      <history-table :records="records" />
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import AppLoader from '../components/ui/AppLoader.vue'
import HistoryTable from '../components/crm/HistoryTable'

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
      records.value = await store.dispatch('record/fetchRecords') || []
      loading.value = false
    })

    return {
      loading,
      records
    }
  }
}
</script>
