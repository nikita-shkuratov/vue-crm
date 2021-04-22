<template>
    <div class="my-settings">
      <ul class="">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            <i class="small material-icons">settings</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/crm/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
export default {
  name: 'Home',
  data: () => ({
    dropdown: null
  }),

  methods: {
    logout () {
      this.$store.commit('auth/logout')
      this.$router.push('/auth')
    }
  },
  mounted () {
    // eslint-disable-next-line
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  beforeUnmount () {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
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
  margin:30px 20px 60px 20px;
}
</style>
