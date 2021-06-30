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
        <h5>Сurrent account status: {{ user.bill }} <small>BYN</small></h5>
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
      const checkUserHasCat = user.value.categories
      const checkUserHasRec = user.value.records
      console.log(user.value)
      catCount.value =
        checkUserHasCat ? Object.keys(user.value.categories)?.length : '0'
      recCount.value =
        checkUserHasRec ? Object.keys(user.value.records)?.length : '0'
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
