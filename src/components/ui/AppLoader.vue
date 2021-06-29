<template>
  <div :class="['app-loader', type]">
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
export default {
  props: ['type']
}
</script>

<style lang="scss">
.app-loader {
  position: absolute;
  .spinner-layer {
    border-color: #b65d9b;
  }
}
.app-loader {
  &.bank {
    position: absolute;
    .spinner-layer {
      border-color: #7cd46f;
    }
  }
}
.preloader-wrapper {
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 10000;
}
</style>
