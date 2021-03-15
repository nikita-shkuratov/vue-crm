<template>
  <div class="wrapper">
    <router-view />
    <app-message></app-message>
  </div>
</template>

<script>
import AppMessage from '../components/ui/appMessage'
export default {
  components: { AppMessage }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
