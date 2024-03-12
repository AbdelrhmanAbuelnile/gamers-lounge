"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function page() {

	return(
		<Suspense>
			<Payment />
		</Suspense>
	)

}

function Payment(){
	const searchParams = useSearchParams();
	const options = {
		mode: "payment",
		currency: "usd",
		amount: Number(searchParams.get("amount")) * 100,
	};
	return (
		<Elements stripe={stripePromise} options={options}>
				<CheckoutForm amount={Number(searchParams.get("amount")) * 100} />
		</Elements>
	);
}

export default page;
