import Stripe from 'stripe';
import { getServiceSupabase } from '../../../utils/supabaseClient';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
});

export default async function handler(req, res) {
  const supabase = getServiceSupabase()
  const id = req.query.id;
  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.');
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id, {
      expand: ['payment_intent'],
    })

    if(checkout_session) {
      const { id: piId } = checkout_session.payment_intent
      const paymentIntent = await stripe.paymentIntents.retrieve(piId, {
        expand: ['charges.data.balance_transaction'],
      })

      const url = paymentIntent.charges.data[0].receipt_url

      // add the receipt_url to each row of the payment table
      const { data, error } = await supabase
        .from('payment')
        .update({receipt_url: url})
        .match({ checkout_session_id: checkout_session.id })
    }

    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
