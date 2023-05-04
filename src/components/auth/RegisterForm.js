import { useUser } from '../../context/user'
import { Listbox, Transition } from '@headlessui/react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import { COUNTRIES, COUNTRY_CODES } from '../../utils/helper'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'

const RegisterForm = () => {
  const router = useRouter()
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [selectedCountryCode, setSelectedCountryCode] =
    useState('Select a country')
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const reRef = useRef()
  // form validation rules
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().min(6, 'Must be at least 6 characters long'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, control } =
    useForm(formOptions)

  const { errors } = formState

  async function onSubmit(formData) {
    setLoading(true)
    setServerError('')
    const token = await reRef.current.executeAsync()
    reRef.current.reset()
    formData['token'] = token
    const response = await fetch('api/auth', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    const data = await response.json()

    if (data?.error) {
      toast.error('Something went wrong', {
        duration: 8000,
        position: 'top-center',

        // Styling
        style: {},
        className: 'bg-navy text-snow',

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#fff',
          secondary: '#23254E',
        },

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
    }

    setLoading(false)
    toast.success(
      'Registration successful, please check your email to confirm',
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
  }

  return (
    <section className="w-full mx-auto mb-7 font-LGC">
      <div>
        <Toaster />
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-center bg-army p-3 md:w-1/2 xl:w-1/3">
        <div className="flex flex-col">
          <form
            className="max-w-sm mt-5 text-navy"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block">Email*</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="email"
                  type="text"
                  {...register('email')}
                />
                <div className="text-chocolate">{errors.email?.message}</div>
              </div>

              <div>
                <label className="block">Password*</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="password"
                  type="password"
                  {...register('password')}
                />
                <div className="text-chocolate">{errors.password?.message}</div>
              </div>

              <div>
                <label className="block">Password Confirmation*</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="password_confirmation"
                  type="password"
                  {...register('password_confirmation')}
                />
                <div className="text-chocolate">
                  {errors.password_confirmation?.message}
                </div>
              </div>

              <div className="flex space-x-1">
                <div>
                  <label className="block">Child's First Name*</label>
                  <input
                    className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="first_name"
                    type="text"
                    {...register('first_name')}
                  />
                  <div className="text-chocolate">
                    {errors.first_name?.message}
                  </div>
                </div>

                <div>
                  <label className="block">Child's Last Name*</label>
                  <input
                    className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="last_name"
                    type="text"
                    {...register('last_name')}
                  />
                  <div className="text-chocolate">
                    {errors.last_name?.message}
                  </div>
                </div>
              </div>

              <div>
                <label className="block">Date of Birth</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="date_of_birth"
                  type="date"
                  {...register('date_of_birth')}
                />
              </div>

              <div className="flex space-x-1">
                <div className="w-1/3">
                  <Controller
                    control={control}
                    defaultValue=""
                    name="country_code"
                    render={({ field: { onChange } }) => (
                      <Listbox
                        as="div"
                        className=""
                        value={selectedCountryCode}
                        onChange={(e) => {
                          console.log(e)
                          onChange(e)
                          setSelectedCountryCode(e)
                        }}
                      >
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block">
                              Country Code
                            </Listbox.Label>
                            <div className="relative">
                              <span className="inline-block w-full">
                                <Listbox.Button className="relative w-full px-2 py-1 pl-3 pr-10 leading-tight text-left transition duration-150 ease-in-out border shadow appearance-none cursor-defaultw-full focus:shadow-outline border-navy bg-snow text-navy focus:outline-none focus:ring-navy">
                                  <span className="block truncate">
                                    {selectedCountryCode}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg
                                      className="w-5 h-5 text-navy"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke="currentColor"
                                    >
                                      <path
                                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </Listbox.Button>
                              </span>

                              <Transition
                                show={open}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                className="absolute w-full mt-1 shadow-lg bg-snow"
                              >
                                <Listbox.Options
                                  static
                                  className="py-1 overflow-auto text-base leading-6 shadow-xs max-h-60 focus:outline-none sm:leading-5"
                                >
                                  {Object.entries(COUNTRY_CODES)
                                    .sort()
                                    .map((country) => (
                                      <Listbox.Option
                                        key={country}
                                        value={country[1]}
                                      >
                                        {({ selected, active }) => (
                                          <div
                                            className={`${
                                              active
                                                ? 'bg-navy text-white'
                                                : 'text-navy'
                                            } relative cursor-default select-none py-2 pl-8 pr-4`}
                                          >
                                            <span
                                              className={`${
                                                selected
                                                  ? 'font-LGCB'
                                                  : 'font-normal'
                                              } block truncate`}
                                            >
                                              {country[0]}: {country[1]}
                                            </span>
                                            {selected && (
                                              <span
                                                className={`${
                                                  active
                                                    ? 'text-snow'
                                                    : 'text-navy'
                                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                              >
                                                <svg
                                                  className="w-5 h-5"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              </span>
                                            )}
                                          </div>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    )}
                  />
                </div>

                <div className="flex-1">
                  <label className="block">Phone</label>
                  <input
                    className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="phone"
                    type="tel"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div>
                <label className="block">Guardian Name</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="guardian_name"
                  type="text"
                  {...register('guardian_name')}
                />
              </div>

              <div className="flex space-x-1">
                <div>
                  <label className="block">Guardian Phone</label>
                  <input
                    className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="guardian_phone"
                    type="tel"
                    {...register('guardian_phone')}
                  />
                </div>

                <div>
                  <label className="block">Guardian Email</label>
                  <input
                    className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                    name="guardian_email"
                    type="email"
                    {...register('guardian_email')}
                  />
                </div>
              </div>

              <div>
                <label className="block">Address</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="address"
                  type="text"
                  {...register('address')}
                />
              </div>

              <div>
                <label className="block">City</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="city"
                  type="text"
                  {...register('city')}
                />
              </div>

              <div className="">
                <Controller
                  control={control}
                  defaultValue=""
                  name="country"
                  render={({ field: { onChange } }) => (
                    <Listbox
                      as="div"
                      className="space-y-1"
                      value={selectedCountry}
                      onChange={(e) => {
                        onChange(e)
                        setSelectedCountry(e)
                      }}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block">
                            Country
                          </Listbox.Label>
                          <div className="relative">
                            <span className="inline-block w-full">
                              <Listbox.Button className="relative w-full px-2 py-1 pl-3 pr-10 leading-tight text-left transition duration-150 ease-in-out border shadow appearance-none cursor-defaultw-full focus:shadow-outline border-navy bg-snow text-navy focus:outline-none focus:ring-navy">
                                <span className="block truncate">
                                  {selectedCountry}
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-navy"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Listbox.Button>
                            </span>

                            <Transition
                              show={open}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                              className="absolute w-full mt-1 shadow-lg bg-snow"
                            >
                              <Listbox.Options
                                static
                                className="py-1 overflow-auto text-base leading-6 shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                              >
                                {COUNTRIES.map((country) => (
                                  <Listbox.Option key={country} value={country}>
                                    {({ selected, active }) => (
                                      <div
                                        className={`${
                                          active
                                            ? 'bg-navy text-white'
                                            : 'text-navy'
                                        } relative cursor-default select-none py-2 pl-8 pr-4`}
                                      >
                                        <span
                                          className={`${
                                            selected
                                              ? 'font-LGCB'
                                              : 'font-normal'
                                          } block truncate`}
                                        >
                                          {country}
                                        </span>
                                        {selected && (
                                          <span
                                            className={`${
                                              active ? 'text-snow' : 'text-navy'
                                            } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                          >
                                            <svg
                                              className="w-5 h-5"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  )}
                />
              </div>

              <div>
                <label className="block">How did you hear about us?</label>
                <input
                  className="w-full px-2 py-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                  name="lead_source"
                  type="text"
                  {...register('lead_source')}
                />
              </div>

              <ReCAPTCHA
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={reRef}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="py-2 mb-2 tracking-widest text-center uppercase bg-navy px-7 text-snow"
                type="submit"
                disabled={loading}
              >
                Register
              </button>
            </div>
          </form>
          <span className="mb-5 place-self-end">
            Already have an account?{' '}
            <Link href="/login">
              <a className="small hover:underline">Login</a>
            </Link>
          </span>
        </div>
      </div>

      {serverError && (
        <div className="font-LGCB text-chocolate">Error: {serverError}</div>
      )}
      {loading && <div>Loading...</div>}
    </section>
  )
}

export default RegisterForm
