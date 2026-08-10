import { useState } from 'react'
import '../styles/globals.css'
import UserContextProvider from '../context/user'
import { CartProvider } from 'use-shopping-cart'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from '../components/shared/layout/Header'
import TabletFooter from '../components/shared/layout/TabletFooter'
import MobileFooter from '../components/shared/layout/MobileFooter'
import Footer from '../components/shared/layout/Footer'

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserContextProvider>
          <CartProvider
            mode="payment"
            cartMode="checkout-session"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
            successUrl={`${process.env.CLIENT_URL}/success`}
            cancelUrl={`${process.env.CLIENT_URL}/cancelled`}
            currency="GBP"
            allowedCountries={['US', 'CA', 'GB', 'IE', 'PE', 'AE', 'IN']}
            billingAddressCollection={true}
          >
            <Header />
            {Component.PageLayout ? (
              <Component.PageLayout>
                <Component {...pageProps} />
              </Component.PageLayout>
            ) : (
              <Component {...pageProps} />
            )}
            <Footer />
            <TabletFooter />
            <MobileFooter />
          </CartProvider>
        </UserContextProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
