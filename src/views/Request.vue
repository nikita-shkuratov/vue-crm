<template>
  <app-loader v-if="loading" />
  <app-page v-else-if="request" back>
    <p><strong>Name</strong>:{{ request.name }}</p>
    <p><strong>Phone</strong>:{{ request.phone }}</p>
    <p><strong>Amount</strong>:{{ currency(request.amount) }}</p>
    <p><strong>Status</strong>:<app-status :type="request.status" /></p>

    <div class="form-item">
      <label for="status">Status</label>
      <select class="myInput" id="status" v-model="status">
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button @click="remove">Delete</button>
    <button @click="update" v-if="hasChanges">Update</button>
  </app-page>
  <h3 v-else>{{ `request with id:${route.params.id} not found` }}</h3>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import AppPage from '../components/ui/AppPage.vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'
import { currency } from '../helpers/currency'

export default {
  components: { AppPage, AppLoader, AppStatus },
  name: 'Request',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const status = ref()
    const loading = ref(true)
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }

    const update = async () => {
      const data = { ...request.value, status: status.value, id: route.params.id }
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }

    return { loading, request, currency, remove, update, hasChanges, status }
  }
}
</script>

<style scoped></style>
