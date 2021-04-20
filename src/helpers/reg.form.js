import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export const useReg = () => {
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
      .max(10)
  )
  const {
    value: firstName,
    errorMessage: fnError,
    handleBlur: fnBlur
  } = useField(
    'firstName',
    yup
      .string()
      .trim()
      .required()
      .min(2)
  )
  const {
    value: lastName,
    errorMessage: lnError,
    handleBlur: lnBlur
  } = useField(
    'lastName',
    yup
      .string()
      .trim()
      .required()
      .min(2)
  )
  const { value: agree } = useField('agree', yup.boolean().required())

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('register/reg', {
        ...values,
        returnSecureToken: true
      })
      router.push('/auth')
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
    agree,
    email,
    password,
    firstName,
    lastName,
    eError,
    pError,
    fnError,
    lnError,
    eBlur,
    fnBlur,
    lnBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts
  }
}
