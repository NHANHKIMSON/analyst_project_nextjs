"use client";
import { use } from "react";
import CheckoutPayment from "@/components/pay";
export default function EventDetails({ params }) {
  const { id } = use(params);
  const amount = 99.99;
  return (
    <>
      <div>
        <h2>Evetns Detail: {id}</h2>
        <CheckoutPayment amount={amount}/>
      </div>
    </>
  );
}
