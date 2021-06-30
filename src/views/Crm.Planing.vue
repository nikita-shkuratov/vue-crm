<template>
  <div>
    <div class="page-title">
      <h3>Planning</h3>
      <h4>{{ myBill }}</h4>
    </div>
    <app-loader v-if="loading" />
    <p class="center" v-else-if="!categories.length">
      There are no categories yet.
      <router-link to="/crm/categories">Add a new category</router-link>
    </p>
    <section v-else>
      <div v-for="cat of categories" :key="cat.id">
        <p>
          <strong>{{ cat.title }}:</strong>
          {{ `${cat.spend} BYN` }} of {{ `${cat.limit} BYN` }}
        </p>
        <div class="progress" v-tooltip="cat.tooltip">
          <div
            class="determinate"
            :class="[cat.progressColor]"
            :style="{ width: cat.progressPercent + '%' }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader.vue'
import { ref, onMounted } from 'vue'
import { currency } from '../helpers/currency'

export default {
  components: { AppLoader },
  name: 'planning',

  setup () {
    const store = useStore()
    const loading = ref(true)
    const categories = ref([])
    const myBill = ref(null)

    onMounted(async () => {
      myBill.value = store.getters.getMyBill

      const records = (await store.dispatch('record/fetchRecords')) || []
      const categoires =
        (await store.dispatch('category/fetchCategories')) || []

      categories.value = categoires.map(cat => {
        const spend = records
          .filter(r => r.categoryId === cat.id)
          .filter(r => r.type === 'outcome')
          .reduce((total, record) => {
            return (total += +record.amount)
          }, 0)

        const percent = (100 * spend) / cat.limit
        const progressPercent = percent > 100 ? 100 : percent
        const progressColor =
          percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red'

        const tooltipValue = cat.limit - spend
        const tooltip = `${
          tooltipValue < 0
            ? `Excess by ${tooltipValue} BYN`
            : `${tooltipValue} BYN Remains`
        } `

        return {
          ...cat,
          progressPercent,
          progressColor,
          spend,
          tooltip,
          currency
        }
      })

      loading.value = false
    })

    return {
      loading,
      categories,
      myBill
    }
  }
}
</script>
