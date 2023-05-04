import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className={`mb-7 hidden w-full bg-army py-5 sm:block`}>
      <div className="items-center justify-around hidden w-full md:flex">
        <Link href="/price-list">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Book now
          </a>
        </Link>
        <img className="w-[280px]" src="ttp-main-logo.svg" alt="" />
        <Link href="/price-list">
          <a className="bg-navy px-[3rem] py-1 text-sm uppercase text-snow sm:px-[4rem] sm:text-base">
            Price List
          </a>
        </Link>
      </div>

      <div className="flex-col items-center hidden p-10 sm:flex md:hidden">
        <img className="mb-10 w-[280px]" src="ttp-main-logo.svg" alt="" />
        <div className="flex justify-between w-full">
          <Link href="/price-list">
            <a className="bg-navy px-12 py-1 text-sm uppercase tracking-wider text-snow sm:px-[4rem] sm:text-base">
              Book now
            </a>
          </Link>
          <Link href="/price-list">
            <a className="bg-navy px-12 py-1 text-sm uppercase tracking-wider text-snow sm:px-[4rem] sm:text-base">
              Price List
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
