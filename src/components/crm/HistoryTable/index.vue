<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Summ</th>
        <th>Date</th>
        <th>Category</th>
        <th>Type</th>
        <th>Open</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ record.amount }}</td>
        <td>{{ filter(record.date) }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span>{{record.type }}</span>
        </td>
        <td>
          <button
            v-tooltip="'View the recording'"
            class="btn-small btn"
            @click="$router.push('/crm/history/detail/' + record.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['records'],
  mounted () {
    console.log(this.records)
  },

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
