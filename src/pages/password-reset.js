import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Head from 'next/head'

function PasswordReset() {
  const router = useRouter()
  const [hash, setHash] = useState(null)

  useEffect(() => {
    setHash(window.location.hash)
  }, [])

  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Must be at least 6 characters long'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, reset, formState, control } =
    useForm(formOptions)
  const { errors } = formState

  async function onSubmit(formData) {
    const notification = toast.loading('Changing Password')

    try {
      // if the user doesn't have accesstoken
      if (!hash) {
        return toast.error('Sorry, Invalid token', {
          id: notification,
        })
      } else if (hash) {
        const hashArr = hash
          .substring(1)
          .split('&')
          .map((param) => param.split('='))

        let type
        let accessToken
        for (const [key, value] of hashArr) {
          if (key === 'type') {
            type = value
          } else if (key === 'access_token') {
            accessToken = value
          }
        }

        if (
          type !== 'recovery' ||
          !accessToken ||
          typeof accessToken === 'object'
        ) {
          toast.error('Invalid access token or type', {
            id: notification,
          })
          return
        }

        // now we will change the password
        const { error } = await supabase.auth.api.updateUser(accessToken, {
          password: formData.password,
        })

        if (error) {
          toast.error(error.message, {
            id: notification,
          })
        } else if (!error) {
          toast.success('Password Changed', {
            id: notification,
          })
          router.push('/')
        }
      }
    } catch (error) {
      console.log(error)
      toast.error('Sorry Error occured', {
        id: notification,
      })
    }
    router.push('/login')
  }

  return (
    <main className="pb-5 font-LGC text-navy">
      <Head>
        <title>The Therapy Place Password Reset</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <div className="mx-auto flex w-[90%] flex-col items-center bg-army p-10 md:w-1/2 xl:w-1/3">
        <form
          className="grid w-full grid-cols-1 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <div className="self-end mb-2 mr-5">
            <button className="py-2 bg-chocolate px-7 text-snow" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default PasswordReset
