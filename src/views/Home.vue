<template>
  <div class="card-block">
    <router-link to="/crm">
      <div class="card crm">
        <div class="image-crm">
          <img src="../assets/img/wwf-BjzpOqw.jpg" />
        </div></div
    ></router-link>
    <router-link to="/bank">
      <div class="card">
        <div class="image-bank">
          <img src="../assets/img/Zt_BJHWpBlY.jpg" />
        </div></div
    ></router-link>
  </div>
  <div class="info-block">
    <div class="about-crm">
      In the CRM section, you can create different categories and set a specific
      money limit for them. For a category, you can create records in which you
      specify your monetary income or expense. This way you can track the
      history of your money transactions and monitor the status of your current
      account.
    </div>
    <div class="about-bank">
      In the BANK section, you can create requests by specifying all the
      necessary information. Then you can edit the request by changing the
      status or delete the unnecessary request altogether. And there is also a
      convenient system for searching and filtering queries.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
@import '../assets/view.home.scss';
</style>
