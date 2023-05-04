import { useRouter } from 'next/router'
import Link from 'next/link'

export { NavLink }

NavLink.defaultProps = {
  exact: false,
}

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className = `
      active
      block
      underline
      decoration-chocolate`
    return <span {...props}>{children}</span>
  }

  return (
    <Link href={href}>
      <a
        {...props}
        className="hover:underline hover:decoration-army text-navy"
      >
        {children}
      </a>
    </Link>
  )
}
