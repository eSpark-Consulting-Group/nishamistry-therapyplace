import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '../../context/user'
import toast, { Toaster } from 'react-hot-toast'

const LoginForm = () => {
  const { userLogin } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await userLogin({
      email,
      password,
    })
    if (error) {
      e.preventDefault()
      toast.error(error.message, {
        duration: 8000,
        position: 'top-center',
        className: 'bg-navy text-snow',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
    }
  }

  return (
    <section className="pb-5 font-LGC text-navy">
      <div>
        <Toaster />
      </div>
      <div className="mx-auto flex w-[90%] flex-col items-center bg-army p-10 md:w-1/2 xl:w-1/3">
        <form className="flex flex-col w-full" onSubmit={handleLogin}>
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
            />
          </div>

          <div className="mx-auto mb-2 w-[90%]">
            <label htmlFor="register-password" className="block mb-1 text-xl">
              Password*
            </label>
            <input
              className="w-full px-2 py-1 mb-1 leading-tight border shadow appearance-none focus:shadow-outline border-navy text-navy focus:outline-none focus:ring-navy active:ring-navy"
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="self-end mb-2 mr-5">
            <button className="py-2 bg-chocolate px-7 text-snow" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="self-end mb-1 mr-5">
          <Link href="/reset">
            <a className="small hover:underline">Reset Password</a>
          </Link>
        </div>

        <div className="self-end mr-5">
          <span>New user? </span>
          <Link href="/register">
            <a className="small hover:underline">Register</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
