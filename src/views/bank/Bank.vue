<template>
  <app-page back>
    <app-loader v-if="loading" />
    <div v-else>
      <div>
        <p class="title-request">
          <span class="btn-create" @click="modal = true">Create</span> a new
          request
        </p>
      </div>
      <request-filter v-model="filter"></request-filter>
      <request-table :requests="requests || []"></request-table>
      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"
          ><reques-modal @created="modal = false" />
        </app-modal>
      </teleport>
    </div>
  </app-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppPage from '../../components/ui/AppPage'
import AppModal from '../../components/ui/AppModal.vue'
import RequestTable from '../../components/bank/request/RequestTable'
import RequesModal from '../../components/bank/request/RequesModal'
import AppLoader from '../../components/ui/AppLoader.vue'
import RequestFilter from '../../components/bank/request/RequestFilter'

export default {
  name: 'Bank',
  components: {
    AppPage,
    AppModal,
    RequestTable,
    RequesModal,
    AppLoader,
    RequestFilter
  },
  setup () {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    onMounted(async () => {
      loading.value = true
      store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() =>
      store.getters['request/requests']
        .filter(request => {
          if (filter.value.name) {
            return request.name.includes(filter.value.name)
          }
          return request
        })
        .filter(request => {
          if (filter.value.status) {
            return filter.value.status === request.status
          }
          return request
        })
    )
    return {
      modal,
      requests,
      loading,
      filter
    }
  }
}
</script>

<style scoped lang="scss">
.btn-create {
  color: #5db678;
  font-weight: 400;
  cursor: pointer;
}
</style>
