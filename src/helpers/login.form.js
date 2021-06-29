import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export const useLogin = () => {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required()
      .email()
  )
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required()
      .min(6)
  )

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', { ...values, returnSecureToken: true })
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  })

  const isTooManyAttempts = computed(() => submitCount.value >= 3)
  watch(isTooManyAttempts, val => {
    if (val) {
      store.dispatch('setMessage', {
        value:
          'You often press enter, make sure everything is correct and try again in 20 seconds.',
        type: false
      })
      setTimeout(() => (submitCount.value = 0), 20000)
    }
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts
  }
}
