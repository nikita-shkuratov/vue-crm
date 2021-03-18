<template>
  <div class="table">
    <h4 v-if="requests.length === 0" class="text-info">no requests</h4>
    <table v-else class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>phone</th>
          <th>summ</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, idx) in requests" :key="r.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ r.name }}</td>
          <td>{{ r.phone }}</td>
          <td>{{ r.amount }}</td>
          <td>{{ r.status }}</td>
          <td>
            <router-link
              v-slot="{ navigate }"
              custom
              :to="{ name: 'Request', params: { id: r.id } }"
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
export default {
  props: ['requests']
}
</script>

<style scoped></style>
