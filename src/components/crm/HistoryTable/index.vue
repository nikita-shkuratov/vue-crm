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
        <td>{{ record.amount }}&nbsp;RUB</td>
        <td>{{ filter(record.date) }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <div
            :class="['badge', record.type === 'income' ? 'primary' : 'danger']"
          >
            {{ record.type }}
          </div>
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
<style scoped lang="scss">
.badge {
  width: 80px;
  border: 1px solid #b7c3d6;
  border-radius: 24px;
  padding: 3px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  &.primary {
    background: linear-gradient(180deg, #25af86 0%, #7cd46f 100%);
  }
  &.danger {
    background: linear-gradient(180deg, #d40d1e 0%, #e44141 100%);
  }
}
@media (max-width: 500px) {
  * {
    font-size: 0.9rem !important;
  }
  .badge {
    width: 55px;
  }

  .btn-small.btn {
    width: 25px;
    height: 25px;
    padding: 0;
  }
}
</style>
