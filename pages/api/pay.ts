// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_S as string, {
 apiVersion: '2020-08-27',
})

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 const session = await stripe.checkout.sessions.create({
  line_items: [
   {
    price: 'price_1Kz4DmGvXzttQk9gbC1S5NCL',
    quantity: 1,
   },
  ],
  mode: 'payment',
  success_url: req.headers.origin + '/payment/success',
  cancel_url: req.headers.origin + '/payment/cancel',
 })

 res.writeHead(302, {
  Location: session.url as string, // redirect to the session's long URL
 })
 res.end()
}
