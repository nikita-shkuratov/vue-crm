<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
