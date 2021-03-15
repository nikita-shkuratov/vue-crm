import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export const useLogin = () => {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting } = useForm()
  console.log(isSubmitting)
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
    await store.dispatch('auth/login', values)
    router.push('/')
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting
  }
}
