import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useUser } from '../../context/user'

const HomeworkFeedbackForm = ({ homewokId }) => {
  const { user } = useUser()
  const userEmail = user.email
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  // form validation rules
  const validationSchema = Yup.object().shape({
    feedback: Yup.string().required(),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  async function onSubmit(formData) {
    setLoading(true)
    setServerError('')
    formData['homewokId'] = homewokId
    formData['userEmail'] = userEmail
    const response = await fetch('/api/update-homework-feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    const responseData = await response.json()
    if (responseData?.error) {
      setServerError(responseData.error)
    } else {
      setLoading(false)
      alert(`feedback submitted!`)
    }
  }

  if (serverError) {
    console.log('serverError', serverError)
  }

  return (
    <form
      className="flex max-w-[45rem] flex-col items-start py-5 text-navy"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <label className="block w-1/4 mr-2 text-sm">Your feedback</label>
        <textarea
          rows="4"
          cols="50"
          className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
          name="feedback"
          {...register('feedback')}
        />
        <div className="absolute text-sm italic right-10 -bottom-7 text-chocolate">
          {errors.feedback?.message}
        </div>
      </div>

      <button
        className="block px-4 py-2 mb-2 tracking-wide text-center uppercase bg-navy text-snow"
        type="submit"
        disabled={loading}
      >
        Submit
      </button>
    </form>
  )
}

export default HomeworkFeedbackForm
