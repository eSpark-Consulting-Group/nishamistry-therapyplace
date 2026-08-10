import TopBar from './TopCtaBar'
import Nav from './Nav'
import Link from 'next/link'

export default function header({ logoUrl }) {
  return (
    <div>
      <TopBar />
      <div className="flex justify-between align-top">
        <Link href={`/`}>
          <a>
            <img
              className="
                w-[220px]
                p-2
                md:w-[250px]
                md:p-5
                lg:w-[300px]
                xl:w-[340px]
                xl:p-6"
              src="/ttp-web-logo.svg"
              alt="Therapy place logo"
            />
          </a>
        </Link>
        <Nav />
      </div>
    </div>
  )
}
