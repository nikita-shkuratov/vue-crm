<template>
  <div>
    <div class="page-title">
      <h3>Bill</h3>
      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <app-loader v-if="loading" />

    <div v-else class="row">
      <CrmBill :rates="currency.rates" />
      <HomeCurrency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import CrmBill from '../components/crm/CrmBill'
import HomeCurrency from '../components/crm/CrmCurrency'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  name: 'crm',

  data: () => ({
    loading: true,
    currency: null
  }),

  async mounted () {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },

  methods: {
    async refresh () {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  components: {
    CrmBill,
    HomeCurrency,
    AppLoader
  }
}
</script>

<style lang='scss'>
@import '../assets/view.crmHome.scss';
</style>
