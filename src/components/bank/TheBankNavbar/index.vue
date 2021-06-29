<template>
  <nav class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/bank" custom v-slot="{ href, navigate }">
          <a
            @click="navigate"
            :class="{ active: $route.path.indexOf(href) != -1 }"
            href="#"
          >
            Requests</a
          ></router-link
        >
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="open">Messages</a>
      </li>
      <li>
        <router-link to="/auth" @click.prevent="logout">Exit</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()
    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/auth')
      },
      open: () => store.commit('openSidebar')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  font-family: 'Didact Gothic', sans-serif;
  background: linear-gradient(178.57deg, #25af86 0%, #7cd46f 100%);
  box-shadow: 0px 4px 26px rgba(93, 182, 120, 0.5);
  border-radius: 0px 25px 0px 25px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
    margin: 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
    margin-left: 15px;
    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      &.active {
        color: #5856567e;
      }
      &:hover {
        color: #5856567e;
        background: none;
      }
    }
  }
}
@media(max-width:600px){
  h3{
    font-size: 14px !important;
    text-align: center;
    margin-bottom: 5px !important;

  }
  .navbar {
display: block !important;
  }
  li{
    margin-left: 0px !important;
  }
}
</style>
