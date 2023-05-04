import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { forwardRef, Fragment } from 'react'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

export default function UserProfileMenu({ user }) {
  return (
    <div className="relative z-50 hidden text-right md:block">
      {user ? (
        <Menu as="div" className="inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-2xl uppercase bg-black bg-opacity-20 font-LGCB text-snow hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <img
                    className="mr-2"
                    src="/profile.svg"
                    width="40"
                    height="40"
                    alt="profile icon"
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mr-10 origin-top-right divide-y shadow-lg bg-snow ring-1 ring-navy ring-opacity-5 focus:outline-none"
                >
                  <div className="px-1 py-4">
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink
                          className={`group flex w-full items-center px-2 py-2 text-navy hover:bg-navy hover:text-snow`}
                          href={`/users/${user.id}`}
                        >
                          Manage Profile
                        </MyLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      <MyLink
                        className={`group flex w-full items-center px-2 py-2 text-navy hover:bg-navy hover:text-snow`}
                        href={`/logout`}
                      >
                        Log Out
                      </MyLink>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="bg-black inline-flex w-full justify-center bg-opacity-20 px-4 py-2 font-LGCB text-[11px] uppercase text-snow hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <img
                    className="mr-2"
                    src="/profile.svg"
                    width="40"
                    height="40"
                    alt="profile icon"
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 mr-10 origin-top-right divide-y shadow-lg bg-snow ring-1 ring-navy ring-opacity-5 focus:outline-none"
                >
                  <div className="px-1 py-4 ">
                    <Menu.Item>
                      <MyLink
                        className={`group flex w-full items-center px-2 py-2 text-navy hover:bg-navy hover:text-snow`}
                        href={`/register`}
                      >
                        Register
                      </MyLink>
                    </Menu.Item>
                    <Menu.Item>
                      <MyLink
                        className={`group flex w-full items-center px-2 py-2 text-navy hover:bg-navy hover:text-snow`}
                        href={`/login`}
                      >
                        Log In
                      </MyLink>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      )}
    </div>
  )
}
