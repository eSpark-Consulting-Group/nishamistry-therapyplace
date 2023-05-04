import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ContactForm = () => {
  const reRef = useRef()

  // form validation rules
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    comments: Yup.string().required('Comments are required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  async function onSubmit(data) {
    const token = await reRef.current.executeAsync()
    reRef.current.reset()
    data['token'] = token
    data['source'] = 'submitted the contact us form'

    const response = fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    if ((await response).status === 200) {
      toast.success(
        'Message received! We will get back to you as soon as possible. Thanks!',
        {
          duration: 8000,
          position: 'top-center',
          className: 'bg-navy text-snow',
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        }
      )
      reset()
    } else {
      toast.error('Something went wrong.')
    }
  }
  return (
    <div className="mx-auto flex w-[90%] flex-col justify-around pt-7 lg:flex-row lg:pt-24">
      <div>
        <Toaster />
      </div>
      <section className="flex flex-col items-center w-full gap-y-10 lg:w-1/3 lg:items-start lg:gap-y-24">
        <div className="sm:ml-[1.5rem]">
          <h2 className="mb-16 text-4xl font-LGCB">Message Us</h2>
          <p className="mb-7">GET IN TOUCH!</p>
          <p>If you have any other queries please feel free to contact us</p>
        </div>
        <div>
          <img
            className="hidden w-[250px] lg:block"
            src="/ttp-main-logo.svg"
            alt="Therapy place logo"
          />
        </div>
      </section>

      <section className="w-full lg:mr-2 lg:w-[45%]">
        <div className="flex flex-col items-center font-LGC">
          <div className="mb-10">
            <form
              className="max-w-sm text-navy"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 gap-y-3">
                <div className="flex items-end gap-x-3">
                  <div className="w-1/2">
                    <div className="mb-1 text-xl">
                      Name:<span className="text-sm">{' *'}</span>
                    </div>
                    <input
                      className="w-full px-3 py-1 mb-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy active:ring-navy"
                      name="first_name"
                      type="text"
                      {...register('first_name')}
                    />
                    <label className="block text-sm">First</label>
                    <div className="text-chocolate">
                      {errors.first_name?.message}
                    </div>
                  </div>

                  <div className="w-1/2">
                    <input
                      className="w-full px-3 py-1 mb-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="last_name"
                      type="text"
                      {...register('last_name')}
                    />
                    <label className="block text-sm">Last</label>
                    <div className="text-chocolate">
                      {errors.last_name?.message}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xl">
                    Email:<span className="text-sm">{' *'}</span>
                  </label>
                  <input
                    className="w-full px-3 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="email"
                    type="email"
                    {...register('email')}
                  />
                  <div className="text-chocolate">{errors.email?.message}</div>
                </div>

                <div>
                  <label className="block mb-1 text-xl">
                    Comments:<span className="text-sm">{' *'}</span>
                  </label>
                  <textarea
                    cols={10}
                    rows={6}
                    className="w-full leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="comments"
                    {...register('comments')}
                  />
                  <div className="text-chocolate">
                    {errors.comments?.message}
                  </div>
                </div>

                <div>
                  <button
                    className="px-6 py-2 mt-2 text-xl text-center uppercase bg-army text-snow"
                    type="submit"
                  >
                    Submit
                  </button>
                  <ReCAPTCHA
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    ref={reRef}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
