import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { PopupModal } from 'react-calendly'
import { useUser } from '../../context/user'
import { v4 as uuidv4 } from 'uuid'

export default function CalendlyBookingEmbed({ session }) {
  const router = useRouter()
  const { user } = useUser()
  let [isModalOpen, setIsModalOpen] = useState(false)
  const [rootElement, setRootElement] = useState(null)
  let [sessionId, setSessionId] = useState('')
  let [email, setEmail] = useState('')
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [userId, setUserId] = useState('')

  useEffect(() => {
    if (typeof window === 'object') {
      setRootElement(document.getElementById('modal-root'))
    }
  }, [])

  useEffect(() => {
    if (user) {
      setEmail(user.email)
      setFirstName(user.first_name)
      setLastName(user.last_name)
      setUserId(user.id)
    }
  }, [user])

  useEffect(() => {
    if (session) {
      setSessionId(session.id)
    }
  }, [session])

  const directBookingId = uuidv4()

  return (
    <>
      <span>
        <button
          className="w-[120px] bg-navy py-2 px-1 uppercase"
          href={session.calendly_booking_url}
          onClick={() => setIsModalOpen(true)}
        >
          Book now
        </button>
      </span>
      <PopupModal
        url={session.calendly_booking_url}
        onModalClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        rootElement={rootElement}
        pageSettings={{
          backgroundColor: 'FFF',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '23254E',
          textColor: '23254E',
        }}
        utm={{
          // needed to process the booking
          utmMedium: directBookingId,
          utmContent: userId,
          utmTerm: sessionId,
        }}
        prefill={{
          email,
          firstName,
          lastName,
          name: `${firstName} ${lastName}`,
        }}
      />
    </>
  )
}
