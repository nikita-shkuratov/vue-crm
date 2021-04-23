<template>
  <app-dropdown-settings></app-dropdown-settings>
  <div class="card-block">
    <div class="card crm">
      <router-link class="link-title" to="/crm">CRM</router-link>
    </div>
    <div class="card">
      <router-link class="link-title" to="/bank">Online Bank</router-link>
    </div>
  </div>
</template>

<script>
import AppDropdownSettings from '../components/ui/AppDropdownSettings.vue'
export default {
  components: { AppDropdownSettings },
  name: 'Home'
}
</script>

<style scoped lang="scss">
.card-block {
  display: flex;
  align-self: center;

  flex-wrap: wrap;
  .card {
    margin: 20px;
    height: 300px;
    width: 300px;
    font-family: 'Didact Gothic', sans-serif;
    background: #ffffff;
    box-shadow: 0px 4px 26px rgba(93, 182, 120, 0.5);
    border-radius: 25px 0px 25px 0px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    &.crm {
      box-shadow: 0px 4px 26px rgba(182, 93, 178, 0.5);
    }

    .link-title {
      text-decoration: none;
      font-family: 'Didact Gothic', sans-serif;
      font-weight: 400;
      font-size: 25px;
      color: #333333;
    }
  }
}
.my-settings {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 20px 60px 20px;
}
</style>
