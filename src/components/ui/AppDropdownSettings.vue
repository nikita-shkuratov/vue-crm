<template>
    <div class="my-settings">
      <ul>
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
</template>

<script>
export default {
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
