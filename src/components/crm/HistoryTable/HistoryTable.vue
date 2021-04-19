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
        <td>{{ record.date }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span :class="[record.typeClass]" class="white-text badge">{{
            record.type
          }}</span>
        </td>
        <td>
          <button
            v-tooltip="'View the recording'"
            class="btn-small btn"
            @click="$router.push('/crm/detail/' + record.id)"
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
  props: ['records']
}
</script>
