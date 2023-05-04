import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import { PopupModal, useCalendlyEventListener } from 'react-calendly'
import { useUser } from '../../context/user'
import Link from 'next/link'

const FreeConsultation = () => {
  const router = useRouter()
  const { user } = useUser()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rootElement, setRootElement] = useState(null)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

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
    }
  }, [user])

  const onEventScheduled = async (eventData) => {
    const {
      data: { event },
    } = eventData
    const result = {
      event,
      userId: user.id,
    }

    setLoading(true)
    setServerError('')

    const response = await fetch('api/consultation-status', {
      method: 'POST',
      body: JSON.stringify(result),
    })

    const responseData = await response.json()
    if (responseData?.error) {
      setServerError(responseData.error)
    }

    setLoading(false)
    router.reload(window.location.pathname)
  }

  useCalendlyEventListener({ onEventScheduled })

  return (
    <Fragment>
      {serverError && (
        <div className="font-LGCB text-chocolate">Error: {serverError}</div>
      )}
      {user ? (
        !user.is_consulted ? (
          <>
            <span>
              <button
                className="
                  w-[230px]
                  bg-navy
                  p-2
                  text-center
                  font-LGC
                  text-base
                  uppercase
                  text-snow
                  md:w-[280px]
                  md:p-3
                  md:text-xl
                  xl:w-[230px]
                  xl:p-2
                  xl:text-base
                "
                href={'https://calendly.com/ttp-82/free-consultation'}
                onClick={() => setIsModalOpen(true)}
              >
                BOOK FREE CONSULTATION
              </button>
            </span>
            <PopupModal
              url="https://calendly.com/ttp-82/free-consultation"
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
              prefill={{
                email,
                firstName,
                lastName,
                name: `${firstName} ${lastName}`,
              }}
            />
          </>
        ) : null
      ) : (
        <Link href={'/register'}>
          <a className="w-[230px] bg-navy p-2 text-center font-LGC uppercase text-snow">
            BOOK FREE CONSULTATION
          </a>
        </Link>
      )}
    </Fragment>
  )
}

export default FreeConsultation
