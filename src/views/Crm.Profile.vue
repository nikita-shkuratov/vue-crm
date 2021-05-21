<template>
  <div>
    <div class="page-title">
      <h3>My Profile</h3>
    </div>
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
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'profile',
  setup () {
    const store = useStore()
    const user = ref({})
    const catCount = ref(0)
    const recCount = ref(0)

    onMounted(() => {
      user.value = store.getters.getUser
      catCount.value = Object.keys(user.value.categories).length || 0
      recCount.value = Object.keys(user.value.records).length || 0
    })
    return {
      user,
      catCount,
      recCount
    }
  }
}
</script>

<style lang="scss" scoped>
h6 {
  color: #cfcfc8;
  margin: 0px 0px 15px 0px;
}
h4{
  margin: 0px;
}
</style>
