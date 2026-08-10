import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import { useUser } from '../../context/user'
import FadeLoader from 'react-spinners/FadeLoader'
import UpdatePsswordForm from './UpdatePasswordForm'

const Profile = ({ profileId }) => {
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const { user } = useUser()
  const [selectedCountry, setSelectedCountry] = useState(user.country)
  const router = useRouter()
  // form validation rules
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, control } =
    useForm(formOptions)
  const { errors } = formState

  // effect runs when user state is updated
  useEffect(() => {
    if (profileId === user.id) {
      // reset form with user data
      reset(user)
    }
  }, [user])

  const onChange = async (e) => {
    const avatarFile = e.target.files[0]
    const { data: avatarData, error: avatarError } = await supabase.storage
      .from('profile-avatars')
      .update(`${user.id}`, avatarFile, {
        upsert: true,
      })

    if (avatarError) {
      console.log('avatarError :>> ', avatarError.message)
    }
  }

  async function onSubmit(formData) {
    setLoading(true)
    setServerError('')
    formData['profileId'] = profileId

    const response = await fetch('../api/update-profile', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    const responseData = await response.json()
    if (responseData?.error) {
      setServerError(responseData.error)
    } else {
      setLoading(false)
      alert(`Profile updated successful`)
    }
  }

  return (
    <section className="w-full mt-3 text-sm font-LGC">
      <div className="block lg:hidden">
        <h3 className="ml-12 text-2xl uppercase font-LGCB lg:ml-0">
          Edit Information
        </h3>
        {serverError && (
          <div className="font-LGCB text-chocolate">Error: {serverError}</div>
        )}
        {loading && (
          <FadeLoader
            color="#23254E"
            height={13}
            cssOverride={{
              margin: '0 auto',
            }}
            width={5}
          />
        )}
        {user && (
          <>
            <form
              className="w-11/12 px-3 mx-auto mt-5 text-navy"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center mb-12">
                {user.avatar_url ? (
                  <img
                    className="object-cover w-20 h-20 mr-3 rounded-full aspect-square"
                    src={`${user.avatar_url}?${Date.now()}`}
                    alt="profile icon"
                  />
                ) : (
                  <div className="object-cover w-20 h-20 mr-3 rounded-full aspect-square">
                    <img
                      className="object-cover w-20 h-20 mr-3 rounded-full aspect-square"
                      src="/profile.svg"
                      alt="profile icon"
                    />
                  </div>
                )}
                <div>
                  <input
                    onChange={onChange}
                    className=" font-LGC text-snow file:bg-navy file:text-xl file:text-snow"
                    name="avatar"
                    type="file"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="grid text-xl gap-y-4">
                  <h3 className="text-2xl uppercase font-LGCB">Client Info</h3>
                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      First Name*
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="first_name"
                      type="text"
                      {...register('first_name')}
                    />
                    <div className="absolute top-2 right-3 text-chocolate">
                      {errors.first_name?.message}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      Last Name*
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="last_name"
                      type="text"
                      {...register('last_name')}
                    />
                    <div className="absolute top-2 right-3 text-chocolate">
                      {errors.last_name?.message}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">Phone</label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="phone"
                      type="tel"
                      {...register('phone')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      Date of Birth
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="date_of_birth"
                      type="date"
                      {...register('date_of_birth')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">Address</label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="address"
                      type="text"
                      {...register('address')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">City</label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="city"
                      type="text"
                      {...register('city')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">Country</label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="country"
                      type="text"
                      {...register('country')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      How did you hear about us?
                    </label>{' '}
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="lead_source"
                      type="text"
                      {...register('lead_source')}
                    />
                  </div>
                </div>

                <div className="grid text-xl gap-7">
                  <h3 className="text-2xl uppercase font-LGCB">
                    Guardian contact details
                  </h3>
                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      Guardian Name
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="guardian_name"
                      type="text"
                      {...register('guardian_name')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      Guardian Phone
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="guardian_phone"
                      type="tel"
                      {...register('guardian_phone')}
                    />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <label className="block w-1/4 mr-2 text-sm">
                      Guardian Email
                    </label>
                    <input
                      className="focus:shadow-outline w-[75%] appearance-none border border-navy p-2 text-sm leading-tight text-navy shadow focus:outline-none focus:ring-navy"
                      name="guardian_email"
                      type="email"
                      {...register('guardian_email')}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end mt-5">
                <button
                  className="px-4 py-2 mb-2 tracking-wide text-center uppercase bg-navy text-snow"
                  type="submit"
                  disabled={loading}
                >
                  Update details
                </button>
              </div>
            </form>
            <UpdatePsswordForm />
          </>
        )}
        {!user && (
          <div className="">
            <span className="">Loading user data...</span>
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <h3 className="text-3xl uppercase font-LGCB">Edit Information</h3>
        {serverError && (
          <div className="font-LGCB text-chocolate">Error: {serverError}</div>
        )}
        {loading && (
          <FadeLoader
            color="#23254E"
            height={13}
            cssOverride={{
              margin: '0 auto',
            }}
            width={5}
          />
        )}
        {user && (
          <>
            <form
              className="mt-5 max-w-[45rem] px-7 text-navy"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center mb-12 gap-x-3">
                {user.avatar_url ? (
                  <img
                    className="object-cover mr-5 rounded-full aspect-square h-36 w-36"
                    src={`${user.avatar_url}?${Date.now()}`}
                    alt="profile icon"
                  />
                ) : (
                  <img
                    className="w-[100px]"
                    src={`/profile.svg?${Date.now()}`}
                    alt="profile icon"
                  />
                )}
                <div>
                  <input
                    onChange={onChange}
                    className=" font-LGC text-snow file:bg-navy file:py-1 file:px-4 file:text-xl file:text-snow"
                    name="avatar"
                    type="file"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-16">
                <div className="grid text-xl gap-7">
                  <h3 className="text-3xl uppercase font-LGCB">Client Info</h3>
                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">First Name*</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="first_name"
                      type="text"
                      {...register('first_name')}
                    />
                    <div className="absolute top-2 right-3 text-chocolate">
                      {errors.first_name?.message}
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Last Name*</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="last_name"
                      type="text"
                      {...register('last_name')}
                    />
                    <div className="absolute top-2 right-3 text-chocolate">
                      {errors.last_name?.message}
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Phone</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="phone"
                      type="tel"
                      {...register('phone')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Date of Birth</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="date_of_birth"
                      type="date"
                      {...register('date_of_birth')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Address</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="address"
                      type="text"
                      {...register('address')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">City</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="city"
                      type="text"
                      {...register('city')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Country</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="country"
                      type="text"
                      {...register('country')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">
                      How did you hear about us?
                    </label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="lead_source"
                      type="text"
                      {...register('lead_source')}
                    />
                  </div>
                </div>

                <div className="grid text-xl gap-7">
                  <h3 className="text-3xl uppercase font-LGCB">
                    Guardian contact details
                  </h3>
                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Guardian Name</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="guardian_name"
                      type="text"
                      {...register('guardian_name')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Guardian Phone</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="guardian_phone"
                      type="tel"
                      {...register('guardian_phone')}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-12">
                    <label className="block w-1/5">Guardian Email</label>
                    <input
                      className="w-4/5 p-2 text-xl leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy"
                      name="guardian_email"
                      type="email"
                      {...register('guardian_email')}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  className="px-4 py-2 mb-2 text-xl tracking-wider text-center uppercase bg-navy text-snow"
                  type="submit"
                  disabled={loading}
                >
                  Update details
                </button>
              </div>
            </form>
            <UpdatePsswordForm />
          </>
        )}
        {!user && (
          <div className="">
            <span className="">Loading user data...</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Profile
