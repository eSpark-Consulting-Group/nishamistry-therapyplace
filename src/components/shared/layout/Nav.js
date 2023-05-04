import { useState } from 'react'
import { NavLink } from './navLink'
import { useRouter } from 'next/router'
import MobileNav from './MobileNav'
import { useUser } from '../../../context/user'

export default function Nav() {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const router = useRouter()

  return (
    <div
      className="
      relative
      z-10
      font-LGCL
      text-xl
      md:text-[1.45rem]
    "
    >
      <MobileNav user={user} />
      <div className="hidden pt-8 pr-5 text-navy md:flex md:space-x-4 lg:space-x-6">
        <NavLink href="/about" exact>
          About
        </NavLink>
        <NavLink href="/services" exact>
          Services
        </NavLink>
        <NavLink href="/price-list" exact>
          Price List
        </NavLink>
        <NavLink href="/contact" exact>
          Contact Us
        </NavLink>
        <NavLink href="/faqs" exact>
          FAQS
        </NavLink>
      </div>
    </div>
  )
}
