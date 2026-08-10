import Link from 'next/link'

const CallToAction2 = () => {
  return (
    <section className="mb-7 bg-army">
      <div className="items-center justify-center hidden w-full p-4 gap-x-36 xl:flex">
        <Link href="/services">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Services
          </a>
        </Link>
        <img className="w-[280px]" src="ttp-main-logo.svg" alt="" />
        <Link href="/resources">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Resources
          </a>
        </Link>
      </div>
      <div className="flex-col items-center hidden p-10 sm:flex xl:hidden">
        <img className="mb-10 w-[280px]" src="ttp-main-logo.svg" alt="" />
        <div className="flex justify-between w-full">
          <Link href="/services">
            <a className="bg-navy px-12 py-1 text-sm uppercase tracking-wider text-snow sm:px-[4rem] sm:text-base">
              Services
            </a>
          </Link>
          <Link href="/resources">
            <a className="bg-navy px-12 py-1 text-sm uppercase tracking-wider text-snow sm:px-[4rem] sm:text-base">
              Resources
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction2
