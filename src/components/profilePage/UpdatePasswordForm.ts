import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const UpdatePasswordForm = () => {
  const [loading, setLoading] = useState(false)
  const [setServerError] = useState('')
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Must be at least 6 characters long'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  async function onSubmit(formData) {
    setLoading(true)
    setServerError('')

    const response = await fetch('../api/update-password', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    const responseData = await response.json()
    if (responseData?.error) {
      setServerError(responseData.error)
    } else {
      setLoading(false)
      alert(`Password updated successful`)
    }
  }

  return (
    <form
      className="mt-5 max-w-[45rem] rounded-[2rem] px-4 py-5 text-navy"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-y-3 lg:hidden">
        <div className="grid text-xl gap-7">
          <h3 className="text-3xl uppercase font-LGCB">Change password</h3>
          <div className="relative flex items-center justify-between">
            <label className="block w-1/4 mr-2 text-sm">Password*</label>
            <input
              className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
              name="password"
              type="password"
              {...register('password')}
            />
            <div className="absolute text-sm italic top-5 right-3 text-chocolate">
              {errors.password?.message}
            </div>
          </div>

          <div className="relative flex items-center justify-between">
            <label className="block w-1/4 mr-2 text-sm">
              Confirm Password*
            </label>
            <input
              className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
              name="password_confirmation"
              type="password"
              {...register('password_confirmation')}
            />
            <div className="absolute text-sm italic top-5 right-3 text-chocolate">
              {errors.password_confirmation?.message}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden grid-cols-1 gap-16 lg:grid">
        <div className="grid text-xl gap-7">
          <h3 className="text-3xl uppercase font-LGCB">Change password</h3>
          <div className="flex items-center justify-between space-x-12">
            <label className="block w-1/5">Password*</label>
            <input
              className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
              name="password"
              type="password"
              {...register('password')}
            />
            <div className="absolute text-sm italic top-5 right-3 text-chocolate">
              {errors.password?.message}
            </div>
          </div>

          <div className="flex items-center justify-between space-x-12">
            <label className="block w-1/5">Confirm Password*</label>
            <input
              className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
              name="password_confirmation"
              type="password"
              {...register('password_confirmation')}
            />
            <div className="absolute text-sm italic top-5 right-3 text-chocolate">
              {errors.password_confirmation?.message}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <button
          className="block px-4 py-2 mb-2 tracking-wide text-center uppercase bg-navy text-snow lg:hidden"
          type="submit"
          disabled={loading}
        >
          Change password
        </button>
        <button
          className="hidden px-4 py-2 mb-2 text-xl tracking-widest text-center uppercase bg-navy text-snow lg:block"
          type="submit"
          disabled={loading}
        >
          Change password
        </button>
      </div>
    </form>
  )
}

export default UpdatePasswordForm
