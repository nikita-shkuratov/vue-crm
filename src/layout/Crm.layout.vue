<template>
  <div class="app-main-layout">
    <the-crm-navbar @showSidebar="isOpen = !isOpen"></the-crm-navbar>
    <app-breadcrumb
      :routeTitle="routeTitle"
      :currentPath="routePath"
    ></app-breadcrumb>
    <the-crm-side-bar
      :open="isOpen"
      @click-link="activeRoute"
    ></the-crm-side-bar>
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/crm/record">
        <i class="large material-icons">add</i></router-link
      >
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TheCrmNavbar from '../components/crm/TheCrmNavbar'
import TheCrmSideBar from '../components/crm/TheCrmSideBar'
import AppBreadcrumb from '../components/ui/AppBreadcrumb.vue'
import { useStore } from 'vuex'

export default {
  components: { TheCrmNavbar, TheCrmSideBar, AppBreadcrumb },
  setup () {
    const isOpen = ref(false)
    const routeTitle = ref('Bill')
    const routePath = ref('/crm')
    const store = useStore()

    onMounted(async () => {
      /*   loading.value = true */
      await store.dispatch('loadUser')
      /*     loading.value = false */
    })

    const activeRoute = (title, url) => {
      routeTitle.value = title
      routePath.value = url
    }
    return {
      isOpen,
      routeTitle,
      routePath,
      activeRoute
    }
  }
}
</script>

<style lang="scss">
@import '../assets/index.scss';
</style>
