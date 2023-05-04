import { supabase } from '../../../utils/supabaseClient'

import cookie from 'cookie'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
})

export default async function handler(req, res) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return res.status(401).send('Unauthorized')
  }

  const token =
    req.headers.cookie && cookie.parse(req.headers.cookie)['sb-access-token']

  if (token) {
    supabase.auth.session = () => ({
      access_token: token,
      token_type: 'Bearer',
      user,
    })
  }

  const {
    data: { stripe_customer },
  } = await supabase
    .from('profile')
    .select('stripe_customer')
    .eq('id', user.id)
    .single()

  if (req.method === 'POST') {
    try {
      const cartItems = req.body
      const line_items = Object.entries(cartItems).map((e) => {
        // for cautionary measures, I will sanitize the name of any `commas` as i am
        // splitting the product details by comma later for DB and payments tracking purposes
        const name = e[1].name.replace(',', '')
        return {
          price_data: {
            currency: e[1].currency,
            unit_amount: e[1].price,
            product_data: {
              name,
              description: e[1].description || e[1].duration,
              metadata: {
                uri: e[1].calendly_event_uri,
                id: e[0],
              },
            },
          },
          quantity: e[1].quantity,
        }
      })

      // flattening the array of product objects into a single one

      const filteredCartItems = Object.entries(cartItems).flatMap((e, i) => ({
        // because stripe doesn't support passing each cart item details,
        // this is a work around to get product details to track payments and sessions
        // the order is `[id, name, price, qty ,calendly ownder event type url (aka owner)]
        // example: product1: '5,  Therapy Session, 4500, 1, https://api.calendly.com/event_types/9c1c42c8-d751-4647-b596-2548d47300a5'
        [`product${i}`]: `${e[0]}, ${e[1].name}, ${e[1].price}, ${e[1].quantity}, ${e[1].calendly_event_uri}`,
      }))
      // single object contains product name as key and quantity as value
      const metadata = Object.assign(...filteredCartItems)
      metadata['userId'] = user.id

      // Create Checkout Sessions from body params.
      const params = {
        customer: stripe_customer,
        mode: 'payment',
        submit_type: 'pay',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'GB', 'IE', 'PE', 'AE', 'IN'],
        },
        line_items,
        metadata,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancelled`,
      }
      const checkoutSession = await stripe.checkout.sessions.create(params)
      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
