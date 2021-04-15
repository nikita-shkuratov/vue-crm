import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRecordForm (fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active'
    }
  })

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

  const {
    value: description,
    errorMessage: descriptionError,
    handleBlur: descriptionBlur
  } = useField(
    'description',
    yup
      .string()
      .trim()
      .required()
  )

  const { value: type, errorMessage: typeError } = useField(
    'type',
    yup.string().required('This is a required field! Please make a choice.')
  )

  const onSubmit = handleSubmit(fn)

  return {
    amount,
    amountError,
    amountBlur,
    description,
    descriptionError,
    descriptionBlur,
    onSubmit,
    isSubmitting,
    type,
    typeError
  }
}
