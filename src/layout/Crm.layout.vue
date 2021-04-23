<template>
  <div class="app-main-layout">
    <the-crm-navbar @showSidebar="isOpen = !isOpen"></the-crm-navbar>
    <the-crm-side-bar :open="isOpen"></the-crm-side-bar>
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
import { ref } from 'vue'
import TheCrmNavbar from '../components/crm/TheCrmNavbar'
import TheCrmSideBar from '../components/crm/TheCrmSideBar'
export default {
  components: { TheCrmNavbar, TheCrmSideBar },
  setup () {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import '../assets/index.scss';
</style>
