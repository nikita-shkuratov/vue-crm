<template>
  <div class="app-loader">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-green-only">
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

<style scoped lang="css">
.app-loader{
/* todo */
}
.preloader-wrapper{
  position: absolute;
  top:45%;
  left: 50%;
  z-index: 10000;
}
</style>
