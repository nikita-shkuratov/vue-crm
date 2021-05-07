<template>
  <app-dropdown-settings></app-dropdown-settings>
  <div class="card-block">
    <router-link to="/crm">
      <div class="card crm">
        <h3>CRM</h3>
        <i class="large material-icons">business_center</i>
      </div></router-link
    >
    <router-link to="/bank">
      <div class="card">
        <h3>Online Bank</h3>
        <i class="large material-icons">account_balance</i>
      </div></router-link
    >
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333333;

    h3 {
      margin: 0;
      margin-bottom: 40px;
      font-family: 'Didact Gothic', sans-serif;
      font-weight: 400;
      font-size: 25px;
    }
    &.crm {
      box-shadow: 0px 4px 26px rgba(182, 93, 178, 0.5);
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
