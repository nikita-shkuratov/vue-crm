<template>
  <app-loader v-if="loading" />
  <div v-else>
    <button @click="modal = true">create</button>

    <request-table :requests="requests || []"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" @close="modal = false"
        ><reques-modal @created="modal = false" />
      </app-modal>
    </teleport>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppModal from '../components/ui/AppModal.vue'
import RequestTable from '../components/request/RequestTable.vue'
import RequesModal from '../components/request/RequesModal.vue'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  components: { AppModal, RequestTable, RequesModal, AppLoader },
  name: 'Request',
  setup () {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)

    onMounted(async () => {
      loading.value = true
      store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests'])
    return {
      modal,
      requests,
      loading
    }
  }
}
</script>

<style scoped></style>
