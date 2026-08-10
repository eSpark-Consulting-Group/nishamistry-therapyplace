import { createContext, useState, useEffect, useContext } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import axios from 'axios'

const Context = createContext()

const UserContextProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(supabase.auth.user())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'PASSWORD_RECOVERY') {
        router.push('/password-reset')
      }
    })
  }, [])

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user()

      if (sessionUser) {
        const { data: profile, error } = await supabase
          .from('profile')
          .select('*')
          .eq('id', sessionUser.id)
          .single()

        setUser({
          ...sessionUser,
          ...profile,
        })
      }
    }

    getUserProfile()

    supabase.auth.onAuthStateChange(() => {
      getUserProfile()
    })
  }, [])

  useEffect(() => {
    axios.post('/api/set-supabase-cookie', {
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
      session: supabase.auth.session(),
    })
  }, [user])

  const userLogin = async (options) => {
    const { user, error } = await supabase.auth.signIn({
      email: options.email,
      password: options.password,
    })
    if (error) return { error }
    router.push('/')
    return { user }
  }

  const userLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/login')
  }

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    userLogin,
    userLogout,
    user,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default UserContextProvider

export const useUser = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
