<template>
  <app-loader class="loader" v-if="loading" />
  <app-page v-else-if="request" back>
    <div class="container">
      <p><strong>Name:</strong> {{ request.name }}</p>
      <p><strong>Phone:</strong> {{ request.phone }}</p>
      <p><strong>Amount:</strong> {{ currency(request.amount) }}</p>
      <div class="status-txt">
        <div>Status</div>
        : <app-status :type="request.status" />
      </div>
      <hr />
      <div class="inf-text">
        You can change the status of the request or delete it.
      </div>
      <div class="change-wrapper">
        <div class="form-item">
          <label for="status">Status:</label>
          <select class="myInput" id="status" v-model="status">
            <option value="done">Done</option>
            <option value="canceled">Canceled</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div class="btn-wrapper">
          <button class="btn-del" @click="remove">Delete</button>
          <button class="btn-upd" @click="update" v-if="hasChanges">
            Update
          </button>
        </div>
      </div>
    </div>
  </app-page>
  <h3 v-else>{{ `request with id:${route.params.id} not found` }}</h3>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { currency } from '../helpers/currency'
import AppPage from '../components/ui/AppPage.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'

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
      request.value = await store.dispatch('request/fetchRequest', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/removeRequest', route.params.id)
      router.push('/')
    }

    const update = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id
      }
      await store.dispatch('request/updateRequest', data)
      request.value.status = status.value
    }

    return { loading, request, currency, remove, update, hasChanges, status }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 30px auto;
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  background: #fafafa;
  border-radius: 20px;
  padding: 50px;
  position: relative;
  font-family: 'Didact Gothic', sans-serif;
  font-weight: normal;
  font-size: 30px;
}
p {
  margin: 5px 0px;
}
.status-txt {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 5px 0px;
  :last-child {
    margin: 7px 0px 0px 7px;
  }
}
.inf-text {
  font-size: 14px;
  text-align: center;
}
.myInput {
  background: #ffffff;
  border: 1px solid #b7c3d6;
  box-sizing: border-box;
  border-radius: 40px;
  height: 40px;
  width: 100px;
  padding: 0px 10px;

  &:focus {
    outline: none;
    border: 1px solid #5db678;
    box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
    box-sizing: border-box;
    border-radius: 40px;
  }
}
.change-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-item {
  select {
    margin-left: 15px;
  }
}
.btn-wrapper {
  display: flex;
  margin-top: 20px;

  .btn-del,
  .btn-upd {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background: linear-gradient(180deg, #25af86 0%, #7cd46f 100%);
    border-radius: 24px;
    border: 1px solid #ffffff;
    width: 100px;
    height: 30px;
    color: #ffffff;
    &:focus {
      outline: none;
      border: 1px solid #ffffff;
      box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
    }
  }
  .btn-del {
    background: linear-gradient(180deg, #af2525 0%, #d46f6f 100%);
    margin-right: 5px;
    &:focus {
      box-shadow: 0px 4px 10px rgba(182, 93, 93, 0.5);
    }
  }
}
.loader {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
