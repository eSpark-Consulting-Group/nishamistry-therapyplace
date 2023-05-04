import { useUser } from '../../context/user'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import styles from './price-list-grid-styles.module.css'
import Link from 'next/link'
import CalendlyBookingEmbed from './CalendlyBookingEmbed'
import Cart from './Cart'

const PriceListGrid = ({ sessions }) => {
  const sections = [
    'parent-consultation',
    'therapy-session',
    'therapy-session',
    'post-consultation',
    'parent-child',
  ]
  const { addItem, cartDetails } = useShoppingCart()
  const { user } = useUser()
  const showBookButton = !!user

  return (
    <section>
      {Object.keys(cartDetails).length > 0 && <Cart />}
      <h1 className="w-full py-3 mx-auto text-3xl tracking-wider text-center uppercase bg-navy font-LGC text-snow sm:text-4xl">
        Price List
      </h1>
      <ul className={styles.list}>
        {sessions.data?.map((session, i) => {
          return (
            <li className={styles.card} key={session.id}>
              <div className={styles.wrapper}>
                <div className="flex flex-col items-center my-auto">
                  <h2 className="mb-2 w-[95%] font-LGCB text-2xl">
                    {session.name}
                  </h2>
                  <p className="mb-2 text-sm uppercase">{`${session.duration} minutes`}</p>
                  <p className="text-5xl font-LGCB">
                    {formatCurrencyString({
                      value: session.price,
                      currency: 'GBP',
                    })}
                  </p>
                </div>
              </div>
              <div className="p-4 space-y-6">
                {showBookButton ? (
                  <div className="flex items-end justify-center space-x-2 text-sm tracking-wider text-center text-snow">
                    <button
                      className="w-[120px] bg-navy py-2 px-1 uppercase"
                      onClick={() => addItem(session)}
                    >
                      Book Multiple
                    </button>
                    <CalendlyBookingEmbed session={session} />
                  </div>
                ) : (
                  <div className="flex w-[265px] flex-col items-center space-y-6 px-4">
                    <Link href={'/login'}>
                      <a className="w-full py-3 text-sm tracking-wider text-center bg-navy text-snow">
                        Sign in to book
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              <Link href={`/services/#${sections[i]}`}>
                <a className="block tracking-wider underline">Learn More</a>
              </Link>
            </li>
          )
        })}
        <li className={styles.card} key="12">
          <div className={styles.wrapper}>
            <div>
              <h2 className="mx-auto mb-2 w-[80%] font-LGCB text-2xl">
                Training Sessions
              </h2>
              <p className="mb-5 text-sm uppercase">{'(SCHOOLS)'}</p>
              <p className="mx-auto mb-5 w-[60%] font-LGCB text-xl">
                PRICE ON REQUEST
              </p>
            </div>
            <p className="w-[95%] p-2 text-sm">
              Bespoke training sessions tailored to your needs
            </p>
          </div>
          <div className="p-4 space-y-6">
            <div className="flex items-end justify-center space-x-2 text-sm tracking-wider text-center text-snow">
              <Link href={'/contact'}>
                <a className="w-[240px] bg-navy px-1 py-3 capitalize">
                  Enquire Now
                </a>
              </Link>
            </div>
          </div>
          <Link href={`/services/#training`}>
            <a className="block tracking-wider underline">Learn More</a>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default PriceListGrid
