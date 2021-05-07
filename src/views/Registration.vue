<template>
  <form class="reg__container" @submit.prevent="onSubmit">
    <div class="title">Registering a new user</div>
    <div class="text">
      If you have account you need to
      <router-link class="reg" to="/auth"><p>Log in</p></router-link>
    </div>

    <div class="form-control">
      <div class="input-wrapper">
        <div class="name-wrapper">
          <div class="first-name">
            <label for="firstName">First Name</label>
            <input
              :class="['input-auth', { invalid: fnError }]"
              type="text"
              id="firstName"
              v-model="firstName"
              @blur="fnBlur"
            />
            <small class="error-message" v-if="fnError">{{ fnError }}</small>
          </div>

          <div class="last-name">
            <label for="lastName">Last Name</label>
            <input
              :class="['input-auth', { invalid: lnError }]"
              type="text"
              id="lastName"
              v-model="lastName"
              @blur="lnBlur"
            />
            <small class="error-message" v-if="lnError">{{ lnError }}</small>
          </div>
        </div>
        <div class="data-wrapper">
          <div class="email">
            <label for="email">Email</label>
            <input
              :class="['input-auth', { invalid: eError }]"
              type="email"
              id="email"
              v-model="email"
              @blur="eBlur"
            />
            <small class="error-message" v-if="eError">{{ eError }}</small>
          </div>

          <div class="password">
            <label for="password">Password</label>
            <input
              :class="['input-auth', { invalid: pError }]"
              type="text"
              id="password"
              v-model="password"
              @blur="pBlur"
            />
            <small class="error-message" v-if="pError">{{ pError }}</small>
          </div>
        </div>
      </div>

      <div class="footer-wrapper">
        <label>
          <input type="checkbox" v-model="agree" />
          <span>I entered the correct data and remembered it.</span>
        </label>
        <button
          class="button"
          type="submit"
          :disabled="isSubmitting || isTooManyAttempts"
        >
          Сonfirm
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useReg } from '../helpers/reg.form'
import { error } from '../helpers/error'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()
    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: false
      })
    }
    return { ...useReg() }
  }
}
</script>
