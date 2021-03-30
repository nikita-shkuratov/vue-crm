import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm (fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {
    value: name,
    errorMessage: nameError,
    handleBlur: nameBlur
  } = useField(
    'name',
    yup
      .string()
      .trim()
      .required()
  )

  const {
    value: phone,
    errorMessage: phoneError,
    handleBlur: phoneBlur
  } = useField(
    'phone',
    yup
      .string()
      .trim()
      .required()
  )

  const {
    value: amount,
    errorMessage: amountError,
    handleBlur: amountBlur
  } = useField(
    'amount',
    yup
      .number()
      .required()
      .min(0)
  )

  const { value: status } = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    status,
    isSubmitting,
    onSubmit,
    name,
    nameError,
    nameBlur,
    phone,
    phoneError,
    phoneBlur,
    amount,
    amountError,
    amountBlur
  }
}
