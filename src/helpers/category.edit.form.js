import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useCategoryEditForm (fn) {
  const { isSubmitting, handleSubmit } = useForm()

  const { value: selectData, errorMessage: selectError } = useField(
    'selectData',
    yup.string().required()
  )

  const {
    value: title,
    errorMessage: titleError,
    handleBlur: titleBlur
  } = useField(
    'title',
    yup
      .string()
      .trim()
      .required()
      .min(5)
  )

  const {
    value: limit,
    errorMessage: limitError,
    handleBlur: limitBlur
  } = useField(
    'limit',
    yup
      .string()
      .trim()
      .required()
  )

  const onSubmit = handleSubmit(fn)

  return {
    title,
    titleError,
    titleBlur,
    limit,
    limitError,
    limitBlur,
    onSubmit,
    isSubmitting,
    selectData,
    selectError
  }
}
