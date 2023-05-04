import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function LeadsForm() {
  const reRef = useRef()

  // form validation rules
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  async function onSubmit(data) {
    const token = await reRef.current.executeAsync()
    reRef.current.reset()
    data['token'] = token
    data['source'] = 'downloaded resources'

    console.log('data :>> ', data)
    const response = fetch('api/download-media', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    if ((await response).status === 200) {
      toast.success('Thanks! We sent the resources to the email you provided', {
        duration: 8000,
        position: 'top-center',
        className: 'bg-navy text-snow',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
      reset()
    } else {
      toast.error('Something went wrong.')
    }
  }

  return (
    <section className="flex flex-col items-end w-full py-7 font-LGC">
      <Toaster />
      <form
        className="mx-auto block w-full text-navy lg:w-[80%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-1/2 gap-5 mx-auto place-items-center md:grid-cols-2 lg:w-full lg:grid-cols-5">
          <div className="relative w-full">
            <label className="block text-2xl">First Name*</label>
            <input
              className="w-full px-5 py-2 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy active:ring-navy lg:px-5"
              name="first_name"
              type="text"
              {...register('first_name')}
            />
            <div className="absolute bottom-0 right-3 text-chocolate">
              {errors.first_name?.message}
            </div>
          </div>

          <div className="relative w-full">
            <label className="block text-2xl">Last Name*</label>
            <input
              className="w-full px-5 py-2 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy lg:px-5"
              name="last_name"
              type="text"
              {...register('last_name')}
            />
            <div className="absolute bottom-0 right-3 text-chocolate">
              {errors.last_name?.message}
            </div>
          </div>

          <div className="relative w-full">
            <label className="block text-2xl">Email*</label>
            <input
              className="w-full px-5 py-2 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy lg:px-5"
              name="email"
              type="text"
              {...register('email')}
            />
            <div className="absolute bottom-0 right-3 text-chocolate">
              {errors.email?.message}
            </div>
          </div>

          <div className="relative w-full">
            <label className="block text-2xl">Parent/Teacher/Other</label>
            <input
              className="w-full px-5 py-2 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy lg:px-5"
              name="role"
              type="text"
              {...register('role')}
            />
          </div>

          <div className="w-full md:place-self-start lg:place-self-end">
            <button
              className="w-1/2 bg-army px-1 py-1 text-center text-[1.25rem] uppercase text-snow"
              type="submit"
            >
              Sign up
            </button>
            <ReCAPTCHA
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ref={reRef}
            />
          </div>
        </div>
      </form>
    </section>
  )
}
