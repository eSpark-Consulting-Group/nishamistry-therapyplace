import Link from 'next/link'

const HomeLearnMore = () => {
  return (
    <section className="hidden p-10 mb-7 bg-navy text-snow sm:block">
      <div className="flex items-center justify-center">
        <p className="mr-5 text-2xl font-LGCB">Would you like to know more?</p>
        <Link href={'/price-list'}>
          <a className="self-center py-2 text-sm text-center w-52 bg-army font-LGCB">
            PRICE LIST
          </a>
        </Link>
      </div>
    </section>
  )
}

export default HomeLearnMore
