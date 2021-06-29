<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layout/Auth.layout'
import MainLayout from './layout/Main.layout'
import BankLayout from './layout/Bank.layout'
import CrmLayout from './layout/Crm.layout'

export default {
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    AuthLayout,
    MainLayout,
    BankLayout,
    CrmLayout
  }
}
</script>
