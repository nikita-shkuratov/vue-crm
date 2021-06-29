<template>
  <div class="breadcrumb-wrap">
    <router-link to="/" class="breadcrumb">Home</router-link>
    <router-link :to="currentPath" class="breadcrumb">
      {{ routeTitle }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['routeTitle', 'currentPath']
}
</script>

<style scoped lang="css">
.breadcrumb-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
}
</style>
