import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentInforPage() {
  return (
    <>
      <h2>Payment info Index</h2>
      <Link href={"/create-payment"}>
        <Button>Add Card</Button>
      </Link>
    </>
  );
}
