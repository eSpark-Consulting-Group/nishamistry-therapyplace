import { useUser } from '../../../context/user'
import Link from 'next/link'
import { Transition, Dialog } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { useRouter } from 'next/router'

const ProfileLayout = ({ children }) => {
  const router = useRouter()
  const { user } = useUser()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleClick(href) {
    router.push(`/${href}`)
    closeModal()
  }

  const profileNav = [
    { href: `/users/${user.id}`, icon: '/profile.svg', label: 'My Profile' },
    {
      href: `/users/${user.id}/appointments`,
      icon: '/appointments.svg',
      label: 'Appointments',
    },
    {
      href: `/users/${user.id}/goals`,
      icon: '/goal.svg',
      label: 'Goals',
    },
    {
      href: `/users/${user.id}/reports`,
      icon: '/reports.svg',
      label: 'Reports',
    },
    {
      href: `/users/${user.id}/homework`,
      icon: '/resources.svg',
      label: 'Homework',
    },
  ]

  return (
    <div className="mx-auto my-7 flex min-h-screen w-[97%] font-LGCB text-navy">
      <Transition show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-10 bg-mint/50 lg:hidden"></div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative z-10 flex flex-col h-full w-72 bg-army lg:hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute flex items-center justify-center w-10 h-10 rounded-full top-4 right-4 focus:outline-none focus:ring-2 focus:ring-snow"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Dialog.Panel className="flex-1 overflow-y-auto font-LGCB">
                <ul className="flex flex-col flex-1 w-full py-10 pl-10 text-xl">
                  {profileNav.map((link) => {
                    return (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => handleClick(link.href)}
                        className="text-navy"
                      >
                        <li
                          key={link.label}
                          className="flex items-center w-full my-5 space-x-5"
                        >
                          <img
                            className="w-8 h-8"
                            src={link.icon}
                            alt={link.icon}
                          />
                          <span>{link.label}</span>
                        </li>
                      </button>
                    )
                  })}
                </ul>
                <div className="m-[2.2rem] flex flex-col items-start border-t-4 border-navy">
                  <Link href={`/users/${user.id}`}>
                    <a className="my-7 flex w-[220px] items-center rounded-2xl bg-snow p-2 py-3 pl-4 uppercase text-navy">
                      <img
                        className="w-10 mr-3"
                        src="/profile.svg"
                        alt="profile icon"
                      />
                      <span className="text-sm">
                        {user.first_name} {user.last_name}
                      </span>
                    </a>
                  </Link>

                  <Link href="/logout">
                    <a className="flex items-center">
                      <img
                        className="w-6 h-6 mx-2"
                        src="/logout.svg"
                        alt="logout.svg"
                      />
                      <span>Logout</span>
                    </a>
                  </Link>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>

      <div className="hidden w-80 flex-col items-center rounded-[2rem] bg-army lg:flex">
        <ul className="flex flex-col flex-1 w-full py-10 pl-10 text-xl">
          {profileNav.map((link) => {
            return (
              <Link key={link.label} href={link.href} scroll={false}>
                <a className="text-navy">
                  <li
                    key={link.label}
                    className="flex items-center w-full my-5 space-x-5"
                  >
                    <img className="w-8 h-8" src={link.icon} alt={link.icon} />
                    <span>{link.label}</span>
                  </li>
                </a>
              </Link>
            )
          })}
        </ul>
        <div className="flex flex-col items-start m-24 border-t-4 border-navy">
          <Link href={`/users/${user.id}`}>
            <a className="flex items-center h-20 p-4 my-5 w-60 rounded-2xl bg-snow">
              <img
                className="w-10 h-10 mr-3"
                src="/profile.svg"
                alt="profile icon"
              />
              <p className="uppercase font-LGCB">{`${user.first_name} ${user.last_name}`}</p>
            </a>
          </Link>

          <Link href="/logout">
            <a className="flex items-center">
              <img
                className="w-6 h-6 mx-2"
                src="/logout.svg"
                alt="logout.svg"
              />
              <span>Logout</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 ml-5 overflow-x-hidden">
        <button
          className="z-40 col-start-1 row-start-1 mt-[.41rem] ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy hover:ring-2 hover:ring-navy focus:outline-none focus:ring-2 focus:ring-navy lg:hidden"
          onClick={() => setIsOpen(true)}
          type="button"
          value="menu icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <div className="w-full col-start-1 row-start-1 mx-auto col-span-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
