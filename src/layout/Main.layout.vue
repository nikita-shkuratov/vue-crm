<template>
  <div class="wrapper">
    <app-message class="main-layout-message"></app-message>
     <app-loader class="loader" v-if="loading" />
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AppMessage from '../components/ui/AppMessage.vue'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  components: { AppMessage, AppLoader },

  setup () {
    const store = useStore()
    const loading = ref(false)

    onMounted(async () => {
      try {
        loading.value = true
        const token = store.getters['auth/token']
        const userEmail = store.getters['auth/getUserEmail']

        const { data } = await axios.get(
          `https://vue-crm-531ed-default-rtdb.firebaseio.com/users.json?auth=${token}`
        )
        const user = Object.values(data).filter(
          user => user.email === userEmail
        )[0]
        store.commit('setUser', {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        })
        loading.value = false
      } catch (e) {
        console.log(e)
      }
    })
    return { loading }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .main-layout-message {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
