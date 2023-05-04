import { useUser } from '../../../context/user'
import { useState, useEffect } from 'react'
import FreeConsultation from '../FreeConsultation'
import UserProfileMenu from './UserProfileMenu'

export default function TopCTABar() {
  const [authenticated, setAuthenticated] = useState(false)
  const [authLink, setAuthLink] = useState('')
  const [authLinkText, setAuthLinkText] = useState('')
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      setAuthenticated(true)
      setAuthLink('/logout')
      setAuthLinkText('Logout')
    }
  }, [user])

  useEffect(() => {
    if (user === null) {
      setAuthenticated(false)
      setAuthLink('/register')
      setAuthLinkText('Register')
    }
  }, [user])

  return (
    <div className="flex items-center justify-center w-full px-2 py-2 bg-army md:justify-end">
      <FreeConsultation />
      <UserProfileMenu user={user} />
    </div>
  )
}
