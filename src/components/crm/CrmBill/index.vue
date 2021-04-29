<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Currency account</span>

        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span>
            {{ currencyFilter(getCurrency(cur), cur) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  }),

  computed: {
    base () {
      const { bill } = this.$store.getters.getUser
      const rub = this.$store.getters.getСurrencies.rates.RUB
      const eur = this.$store.getters.getСurrencies.rates.EUR
      return bill / (rub / eur)
    }
  },
  methods: {
    getCurrency (currency) {
      return Math.floor(this.base * this.rates[currency])
    },
    currencyFilter (value, currency = 'RUB') {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency
      }).format(value)
    }
  }
}
</script>
