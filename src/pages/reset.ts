import { supabase } from '../utils/supabaseClient'
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import { useRouter } from 'next/router'

function Reset() {
  const router = useRouter()
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'PASSWORD_RECOVERY') {
        router.push('/reset-password')
      }
    })
  }, [])
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const notification = toast.loading('Sending Email....')

    try {
      const { data, error } = await supabase.auth.api.resetPasswordForEmail(
        email,
        {
          redirectTo: `${process.env.CLIENT_URL}/password-reset`, //// this will redirect to us at password-reset page,
          //// you can also set your own page for it.
        }
      )

      if (error) {
        toast.error(error.message, {
          id: notification,
        })
      } else if (data) {
        toast.success(
          "Email sent, please check your spam folder if you don't receive the email in your inbox",
          {
            id: notification,
            duration: 12000,
          }
        )
      }
    } catch (error) {
      toast.error('Sorry Error occured', {
        id: notification,
      })
    }
  }

  return (
    <section className="pb-5 font-LGC text-navy">
      <Head>
        <title>The Therapy Place - Forgot Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <div className="mx-auto flex w-[90%] flex-col items-center bg-army p-10 md:w-1/2 xl:w-1/3">
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mx-auto mb-2 w-[90%]">
            <label htmlFor="register-email" className="block mb-1 text-xl">
              Email*
            </label>
            <input
              className="w-full px-2 py-1 mb-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy active:ring-navy"
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email to reset your password"
            />
          </div>

          <div className="self-end mb-2 mr-5">
            <button className="py-2 bg-chocolate px-7 text-snow" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Reset
