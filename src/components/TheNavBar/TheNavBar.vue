<template>
  <nav class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Requests</router-link>
      </li>
      <li>
        <router-link to="/">Help</router-link>
      </li>
      <li>
        <router-link to="/">Messages</router-link>
      </li>
      <li>
        <a to="#">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.navbar {
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(178.57deg, #25af86 0%, #7cd46f 100%);
  box-shadow: 0px 4px 26px rgba(93, 182, 120, 0.5);
  border-radius: 22px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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
  }
}
</style>
