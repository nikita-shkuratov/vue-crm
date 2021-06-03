<template>
  <div>
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <app-loader v-if="loading" />
      <div class="row" v-else>
        <CategoryCreate @created="addNewCategory" />
        <CategoryEdit
          v-if="categories.length"
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories"
        />
        <p v-else class="center">There are no categories yet.</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/crm/CategoryCreate'
import CategoryEdit from '../components/crm/CategoryEdit'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../components/ui/AppLoader.vue'

export default {
  components: {
    CategoryCreate,
    AppLoader,
    CategoryEdit
  },

  setup () {
    const store = useStore()
    const loading = ref(true)
    const categories = ref([])
    const updateCount = ref(0)

    onMounted(async () => {
      categories.value =
        (await store.dispatch('category/fetchCategories')) || []
      loading.value = false
    })

    const addNewCategory = category => {
      const chechCategoryInArr = categories.value.some(cat => cat.id === category.id)
      if (!chechCategoryInArr) {
        categories.value.push(category)
      }
    }

    const updateCategories = category => {
      const idx = categories.value.findIndex(c => c.id === category.id)
      categories.value[idx].title = category.title
      categories.value[idx].limit = category.limit
      updateCount.value++
    }

    return {
      categories,
      loading,
      updateCount,
      addNewCategory,
      updateCategories
    }
  }
}
</script>
