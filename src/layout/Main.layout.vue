<template>
  <div class="wrapper">
    <app-message class="main-layout-message"></app-message>
    <app-loader class="loader" v-if="loading" />
    <router-view />
  </div>
</template>

<script>
import AppMessage from '../components/ui/AppMessage.vue'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  components: { AppMessage, AppLoader }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .main-layout-message {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
