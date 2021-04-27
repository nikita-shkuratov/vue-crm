<template>
  <nav class="navbar">
    <div class="nav-wrapper">

      <div class="side__bar">
        <a href="#" @click.prevent="$emit('showSidebar')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="side__bar_time">{{ filter(date) }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
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
  </nav>
</template>

<script>
export default {
  emits: ['showSidebar'],
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    logout () {
      this.$store.commit('auth/logout')
      this.$router.push('/auth')
    },
    filter (value) {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
      /*       const locale = store.getters.info.locale || 'ru-RU' */
      const locale = 'ru-RU'
      return new Intl.DateTimeFormat(locale, options).format(new Date(value))
    }
  },
  computed: {
    name () {
      const { firstName, lastName } = this.$store.getters.getUser
      return `${firstName} ${lastName}`
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
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
.navbar {
  font-family: 'Didact Gothic', sans-serif;
  background: linear-gradient(178.57deg, #B65D9B 0%, #d46fd4 100%);
  box-shadow: 0px 4px 26px rgba(182, 93, 178, 0.5);
  border-radius: 0px 25px 0px 25px;
  padding: 10px 20px;
}
.nav-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:#ffffff;
}
.side__bar{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.side__bar_time{
  margin-left: 15px;
}
</style>
