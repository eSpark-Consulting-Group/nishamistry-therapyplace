import { useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useUser } from '../context/user'
import FadeLoader from 'react-spinners/FadeLoader'

const Logout = () => {
  const { userLogout } = useUser()
  useEffect(userLogout, [])
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

export default Logout
