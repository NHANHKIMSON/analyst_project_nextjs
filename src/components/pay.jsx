"use client";

import CheckoutPage from "@/components/checkou-page";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutPayment(props) {
    
  const amount = props.amount
  return (
    <>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-col-12">
          <div>
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
          </div>
        </div>
      </div>
    </>
  );
}
