<template>
  <div class="pages">
    <div v-if="back">
      <router-link class="breadcrumbs" to="/"
        ><div class="arrow-ico"></div>
        back to home page</router-link
      >
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  color: #90949f;
}
.arrow-ico {
  height: 20px;
  width: 20px;
  margin-right: 5px;
  margin-bottom: 3px;
  background-image: url('../../assets/ico/arrow.svg');
}
</style>
