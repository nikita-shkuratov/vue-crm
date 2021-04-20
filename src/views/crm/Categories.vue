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
import CategoryCreate from '../../components/crm/CategoryCreate/CategoryCreate'
import CategoryEdit from '../../components/crm/CategoryEdit/CategoryEdit'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../../components/ui/AppLoader.vue'

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
      loading.value = true
      store.dispatch('category/fetchCategories')
      categories.value = store.getters['category/getCategories']
      console.log(categories.value)
      loading.value = false
    })

    const addNewCategory = category => categories.value.push(category)

    /*     const updateCategories = category => {
      const idx = categories.value.findIndex(c => c.id === category.id)
      categories[idx].title = category.title
      categories[idx].limit = category.limit
      updateCount.value++
    } */

    return {
      categories,
      loading,
      updateCount,
      addNewCategory
      /* updateCategories */
    }
  }
}
</script>
