<template>
  <ul class="sidenav app-sidenav" :class="{ open }">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
    >
     <li> <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a></li>
    </router-link>
  </ul>
</template>

<script>
/* import localizeFilter from '../../../helpers/filters/localizeFilter/localizeFilter' */
export default {
  props: ['open'],
  setup () {
    const links = [
      { title: 'Bill', url: '/crm', exact: true },
      { title: 'History', url: '/crm/history' },
      { title: 'Planning', url: '/crm/planing' },
      { title: 'NewRecord', url: '/crm/record' },
      { title: 'Categories', url: '/crm/categories' }
    ]
    return {
      links
    }
  }
}
</script>
