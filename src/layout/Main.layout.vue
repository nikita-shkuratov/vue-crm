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
  font-size: inherit;
}
@media(max-width:800px){
  .wrapper{height: 100%;
  width: 100%;}
}
</style>
