<template>
  <div class="card crm">
    <router-link class="link-title" to="/crm">CRM</router-link>
  </div>
  <div class="card">
    <router-link class="link-title" to="/bank">Online Bank</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
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
  &.crm{
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
</style>
