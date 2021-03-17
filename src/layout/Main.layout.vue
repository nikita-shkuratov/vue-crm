<template>
  <the-nav-bar></the-nav-bar>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar/TheNavBar'
export default {
  components: { TheNavBar }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 30px;
  height: 600px;
  font-family: 'Didact Gothic', sans-serif;
  background: #ffffff;
  box-shadow: 0px 4px 26px rgba(93, 182, 120, 0.5);
  border-radius: 25px 0px 25px 0px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
