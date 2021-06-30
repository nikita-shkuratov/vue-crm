<template>
  <div class="auth_wrapper">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.auth_wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
@import '../assets/auth.scss';
</style>
