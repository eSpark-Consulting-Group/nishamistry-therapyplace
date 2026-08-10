import { useUser } from '../context/user'
import { useRouter } from 'next/router'
import FadeLoader from 'react-spinners/FadeLoader'
import LoginForm from '../components/auth/LoginForm'
import Head from 'next/head'

const Login = () => {
  const router = useRouter()
  const { user } = useUser()

  if (user) {
    router.push('/')
    return (
      <FadeLoader
        color="#23254E"
        height={13}
        cssOverride={{
          margin: '0 auto',
        }}
        width={5}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Sign in - The Therapy Place</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginForm />
    </>
  )
}

export default Login
