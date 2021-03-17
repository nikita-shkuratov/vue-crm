<template>
  <nav class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/reguest">Requests</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <router-link to="/message">Messages</router-link>
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
      }
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
    }
  }
}
</style>
