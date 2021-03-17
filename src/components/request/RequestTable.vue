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
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
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

<style scoped>

</style>
