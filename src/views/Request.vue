<template>
  <app-loader v-if="loading" />
  <app-page v-else-if="request" back>
   <p><strong>Name</strong>:{{request.name}}</p>
   <p><strong>Phone</strong>:{{request.phone}}</p>
   <p><strong>Amount</strong>:{{currency(request.amount)}}</p>
   <p><strong>Status</strong>:<app-status :type="request.status" /></p>
  </app-page>
<h3 v-else>{{`request with id:${route.params.id} not found`}}</h3>

</template>

<script>
import { useRoute } from 'vue-router'
import AppPage from '../components/ui/AppPage.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'
import { currency } from '../helpers/currency'

export default {
  components: { AppPage, AppLoader, AppStatus },
  name: 'Request',
  setup () {
    const route = useRoute()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      loading.value = false
    })

    return { loading, request, currency }
  }
}
</script>

<style scoped></style>
