<template>
  <div class="sidebar" v-if="sidebar">
    <div class="sidebar-container">
      <div class="close-sidebar" @click="close" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        nihil quidem ut commodi dolorem earum perspiciatis ex neque doloremque
        asperiores, excepturi, nemo consequuntur facere, magni quaerat deserunt.
        Iure, quibusdam totam?
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar)
    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  top: 22%;
  right: 10px;

  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
}
.sidebar-container {
  box-sizing: border-box;
  width: 400px;
  height: 500px;
  background: #fafafa;
  border-radius: 20px;
  padding: 50px;
  position: relative;
}
.close-sidebar {
  background-image: url('../../../assets/ico/close-ico.svg');
  height: 20px;
  width: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 100;
}
</style>
