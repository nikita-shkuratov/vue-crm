<template>
  <div class="wrapper">
    <the-nav-bar></the-nav-bar>
    <the-sidebar></the-sidebar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavBar from '../components/bank/TheBankNavbar'
import TheSidebar from '../components/bank/TheBankSideBar'

export default {
  components: { TheNavBar, TheSidebar }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  min-height: 600px;
  font-family: 'Didact Gothic', sans-serif;
  background: #ffffff;
  box-shadow: 0px 4px 26px rgba(93, 182, 120, 0.5);
  border-radius: 25px 0px 25px 0px;
  padding: 10px 20px;
}
.wrapper {
  position: relative;
}
</style>
