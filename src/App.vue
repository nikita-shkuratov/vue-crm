<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layout/Auth.layout'
import MainLayout from './layout/Main.layout'

export default {
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>
