import initStripe from 'stripe'
import { getServiceSupabase } from '../../utils/supabaseClient'

const handler = async (req, res) => {
  const supabase = getServiceSupabase()
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res
      .status(401)
      .send("You're not authorized to call this API endpoint")
  }
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
  const customer = await stripe.customers.create({
    email: req.body.record.email,
  })

  const { data, error } = await supabase
    .from('profile')
    .update({
      stripe_customer: customer.id,
    })
    .eq('id', req.body.record.id)
  if (error) {
    console.log('Error', error.message)
  }
  res.send({ message: `stripe customer created: ${customer.id}` })
}

export default handler
