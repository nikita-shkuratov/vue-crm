<template>
  <div class="table">
    <h5 v-if="requests.length === 0" class="text-info">No requests.</h5>
    <table v-else class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Summ</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, idx) in requests" :key="r.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ r.name }}</td>
          <td>{{ r.phone }}</td>
          <td>{{ currency(r.amount) }}</td>
          <td><app-status :type="r.status" /></td>
          <td>
            <router-link v-slot="{ navigate }" custom :to="`/bank/reguest/${r.id}`">
              <button class="button" @click="navigate">Open</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { currency } from '../../../helpers/currency'
import AppStatus from '../../ui/AppStatus.vue'
export default {
  components: { AppStatus },
  props: ['requests'],
  setup () {
    return { currency }
  }
}
</script>

<style scoped lang="scss">
.table {
  margin-top: 30px;
  border-collapse: collapse;
}
th,
td {
  width: 20%;
  text-align: start;
  padding: 8px;
  border-bottom: 1px solid #b7c3d6;
}
.button {
  width: 80px;
  border: 1px solid#25af86;
  border-radius: 24px;
  font-size: 14px;
  background: #ffffff;
  color: #25af86;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.text-info{
    font-family: 'Didact Gothic', sans-serif;
    font-weight: normal;
}
</style>
