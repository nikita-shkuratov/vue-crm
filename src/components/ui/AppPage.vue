<template>
  <div class="pages">
    <div v-if="back">
      <div class="breadcrumbs">
        Back to<router-link class="back-link" to="/"
          >&nbsp;Home&nbsp;</router-link
        >page
      </div>
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
  justify-content: flex-end;
  text-decoration: none;
  font-size: 16px;
  color: #90949f;
}
.back-link {
  text-decoration: none;
  font-size: 16px;
  color: #5db678;
}
</style>
