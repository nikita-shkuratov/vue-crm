<template>
  <form class="auth__container" @submit.prevent="onSubmit">
    <div class="title">Authorization</div>
    <div class="text">
      If you don't have an account you can
      <router-link class="reg" to="/registration"><p>Register</p></router-link>
    </div>

    <div class="form-control">
      <div class="input-wrapper">
        <div class="email">
          <label for="email">Email</label>
          <input
            :class="['myInput', { invalid: eError }]"
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
            :class="['myInput', { invalid: pError }]"
            type="password"
            id="password"
            v-model="password"
            @blur="pBlur"
          />
          <small class="error-message" v-if="pError">{{ pError }}</small>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="info-text">Lorem ipsum dolor sit amet consectetur.</div>
        <button
          class="button"
          type="submit"
          :disabled="isSubmitting || isTooManyAttempts"
        >
          Enter
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useLogin } from '../helpers/login.form'
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
    return { ...useLogin() }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/auth.scss';
</style>
