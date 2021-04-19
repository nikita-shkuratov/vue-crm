<template>
  <div>
    <div class="page-title">
      <h3>Planning</h3>
      <h4>{{ myBill }}</h4>
    </div>

    <app-loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      There are no categories yet.
      <router-link to="/categories">Add a new category</router-link>
    </p>

    <section v-else>
      <div v-for="cat of categories" :key="cat.id">
        <p>
          <strong>{{ cat.title }}:</strong>
          {{ cat.spend }} из {{ cat.limit }}
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
import AppLoader from '../../components/ui/AppLoader.vue'
import { ref, onMounted } from 'vue'

export default {
  components: { AppLoader },
  name: 'planning',

  setup () {
    const store = useStore()
    const loading = ref(true)
    const categories = ref([])
    const myBill = ref(null)

    const currencyFilter = (value, currency = 'RUB') => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency
      }).format(value)
    }

    onMounted(async () => {
      myBill.value = store.getters.getMyBill

      store.dispatch('record/fetchRecords')
      const records = store.getters['record/getRecords']

      store.dispatch('category/fetchCategories')
      const categoires = store.getters['category/getCategories']

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
          tooltipValue < 0 ? 'Excess by' : 'Remains'
        } ${currencyFilter(Math.abs(tooltipValue))}`

        return {
          ...cat,
          progressPercent,
          progressColor,
          spend,
          tooltip
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
