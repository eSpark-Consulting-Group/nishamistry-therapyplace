import { useRouter } from 'next/router'
import { useShoppingCart } from 'use-shopping-cart'
import { fetchGetJSON } from '../utils/stripe-helpers'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import FadeLoader from 'react-spinners/FadeLoader'

const ResultPage = () => {
  const [loading, setLoading] = useState(false)
  const { clearCart } = useShoppingCart()
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      clearCart()
      setLoading(false)
    }, 2000)
  }, [])

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (
    <div className="p-10 mx-auto">
      {!loading ? (
        <>
          <h1 className="text-5xl font-LGCB">Checkout Payment Result</h1>
          <h2 className="text-xl">
            Status: {data?.payment_intent?.status ?? 'loading...'}
          </h2>
          <p>
            Thank you for you purchase. Please check your email for further
            instructions.
          </p>
          <p>Cart cleared!</p>
        </>
      ) : (
        <FadeLoader
          color="#23254E"
          height={13}
          cssOverride={{
            margin: '0 auto',
          }}
          width={5}
        />
      )}
    </div>
  )
}

export default ResultPage
