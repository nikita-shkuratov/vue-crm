<template>
  <div>
    <div class="page-title">
      <h3>My Profile</h3>
    </div>

    <app-loader v-if="loading" />
    <div v-else>
      <div>
        <h4>{{ user.lastName }} {{ user.firstName }}</h4>
        <h6>{{ user.email }}</h6>
      </div>
      <div>
        <h5>Сurrent account status: {{ user.bill }} <small>RUB</small></h5>
        <h5>Number of categories created: {{ catCount }}</h5>
        <h5>Number of records created: {{ recCount }}</h5>
        <h5></h5>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  components: { AppLoader },
  name: 'profile',
  setup () {
    const store = useStore()
    const user = ref({})
    const catCount = ref(0)
    const recCount = ref(0)
    const loading = ref(true)

    onMounted(async () => {
      user.value = await store.dispatch('loadUser')
      catCount.value = Object.keys(user.value.categories).length
      recCount.value = Object.keys(user.value.records).length
      loading.value = false
    })

    return {
      user,
      catCount,
      recCount,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
h6 {
  color: #cfcfc8;
  margin: 0px 0px 15px 0px;
}
h4 {
  margin: 0px;
}
</style>
