<template>
  <ul class="sidenav app-sidenav" :class="{ open }">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
    >
      <li>
        <a
          href="#"
          class="waves-effect waves-orange pointer"
          @click="clickLink(link.title, link.url)"
          >{{ link.title }}</a
        >
      </li>
    </router-link>
  </ul>
</template>
<li>
        <router-link to="/bank"
         custom v-slot="{href, navigate}">
         <a @click="navigate" :class="{active: $route.path.indexOf(href) != -1}" href="#"> Requests</a></router-link>
      </li>

<script>

export default {
  props: ['open'],
  emits: ['click-link'],
  setup (props, context) {
    const clickLink = (title, url) => context.emit('click-link', title, url)
    const links = [
      { title: 'Bill', url: '/crm', exact: true },
      { title: 'History', url: '/crm/history' },
      { title: 'Planning', url: '/crm/planing' },
      { title: 'New entry', url: '/crm/record' },
      { title: 'Categories', url: '/crm/categories' }
    ]
    return {
      links,
      clickLink
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav {
  .active > li > a {
    background: linear-gradient(178.57deg, #b65d9b 0%, #d46fd4 100%);
    color:#ffffff;
    font-size: 16px;
  }
}
.navbar {
  font-family: 'Didact Gothic', sans-serif;
  background: linear-gradient(178.57deg, #b65d9b 0%, #d46fd4 100%);
  box-shadow: 0px 4px 26px rgba(182, 93, 178, 0.5);
  border-radius: 0px 25px 0px 25px;
  padding: 10px 20px;
}
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
}
.side__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.side__bar_time {
  margin-left: 15px;
}
</style>
