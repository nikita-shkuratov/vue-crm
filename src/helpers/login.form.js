import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export const useLogin = () => {
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

  const onSubmit = handleSubmit(() => {})

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
