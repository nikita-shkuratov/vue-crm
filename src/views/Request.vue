<template>
  <button @click="modal = true">create</button>
  <request-table :requests="[]"></request-table>
  <teleport to="body">
    <app-modal v-if="modal" @close="modal = false"
      ><reques-modal @created="modal = false" />
    </app-modal>
  </teleport>
</template>

<script>
import { ref } from 'vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestTable from '../components/request/RequestTable.vue'
import RequesModal from '../components/request/RequesModal.vue'

export default {
  components: { AppModal, RequestTable, RequesModal },
  name: 'Request',
  setup () {
    const modal = ref(false)
    return {
      modal
    }
  }
}
</script>

<style scoped></style>
