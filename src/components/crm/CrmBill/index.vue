<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Currency account</span>
        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span>
            {{ `${getCurrency(cur)} ${cur}` }}
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
    currencies: ['BYN', 'USD', 'EUR']
  }),

  computed: {
    base () {
      const { bill } = this.$store.getters.getUser
      return bill
    }
  },
  methods: {
    getCurrency (currency) {
      return (this.base / this.rates[currency]).toFixed(2)
    }
  }
}
</script>
