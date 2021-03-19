<template>
  <div class="pages">
    <div class="breadcrumbs" v-if="back">
      <router-link to="/">back to home page</router-link>
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

<style scoped>
.pages {
}
</style>
