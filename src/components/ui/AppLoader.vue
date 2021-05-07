<template>
  <div class="app-loader">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-color-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.app-loader{
position: absolute;
.spinner-layer{
border-color:#B65D9B}
}
.preloader-wrapper{
  position: absolute;
  top:45%;
  left: 50%;
  z-index: 10000;
}
</style>
