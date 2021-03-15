<template>
<the-nav-bar></the-nav-bar>
  <div class="container">
   <router-view/>
  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar/TheNavBar'
export default {
  components: { TheNavBar }
}
</script>
<style scoped></style>
