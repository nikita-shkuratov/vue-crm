<template>
  <div class="table">
    <h4 v-if="requests.length === 0" class="text-info">no requests</h4>
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
            <router-link
              v-slot="{ navigate }"
              custom
              :to="`/reguest/${r.id}`"
            >
              <button class="button" @click="navigate">Open</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { currency } from '../../helpers/currency'
import AppStatus from '../ui/AppStatus.vue'
export default {
  components: { AppStatus },
  props: ['requests'],
  setup () {
    return { currency }
  }
}
</script>

<style scoped></style>
