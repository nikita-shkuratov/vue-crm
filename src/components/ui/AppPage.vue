<template>
  <div class="pages">
    <div v-if="back">
      <div class="breadcrumbs">
        Back to
        <router-link class="back-link" to="/">&nbsp;Home&nbsp;</router-link> or
        <router-link class="back-link" to="/bank">&nbsp;Bank&nbsp;</router-link
        >page
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
// import { useRoute } from 'vue-router'
export default {
  /* data () {
    const route = useRoute()
    const currentPage =
      route.meta.layout[0].toUpperCase() + route.meta.layout.slice(1)
      console.log(currentPage)
    return currentPage
  }, */
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
.back-link {
  text-decoration: none;
  font-size: 16px;
  color: #5db678;
}
</style>
