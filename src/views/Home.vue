<template>
  <app-page>
    <button @click="modal = true">create</button>

    <teleport to="body">
      <app-modal
        v-if="modal"
        title="crete test"
        @close="modal = false"
      ></app-modal>
    </teleport>

    <request-table :requests="[]"></request-table>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import { ref } from 'vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestTable from '../components/request/RequestTable.vue'

export default {
  components: { AppPage, AppModal, RequestTable },
  name: 'Home',
  setup () {
    const modal = ref(false)
    return {
      modal
    }
  }
}
</script>

<style scoped></style>
