<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Currency exchange rate</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cur in currencies" :key="cur">
              <td>{{cur}}</td>
              <td>{{rates[cur].toFixed(5)}}</td>
              <td>{{filter(date)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['BYN', 'USD', 'EUR']
  }),
  methods: {
    filter (value) {
      const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
      const locale = 'en-US'
      return new Intl.DateTimeFormat(locale, options).format(new Date(value))
    }
  }
}
</script>
