"use client"
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
import { Suspense, useState } from "react";
import { useCart } from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import CartApis from "../../_utils/CartApis";
import OrderApis from "../../_utils/OrderApis";

const CheckoutForm = ({ amount }) => {
	const stripe = useStripe();
	const elements = useElements();

	const { cart, setCart } = useCart();
	const { user } = useUser();

	const [errorMessage, setErrorMessage] = useState();
	const [loading, setLoading] = useState(false);

	const handleError = (error) => {
		setLoading(false);
		setErrorMessage(error.message);
	};

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
		  // Stripe.js hasn't yet loaded.
		  // Make sure to disable form submission until Stripe.js has loaded.
		  return;
		}

		createOrder_();
    sendEmail();

		// Trigger form validation and wallet collection
		const {error: submitError} = await elements.submit();
		if (submitError) {
		  handleError(submitError);
		  return;
		}

		const res = await fetch('/api/create-intent', {
		  method: 'POST',
		  body: JSON.stringify({amount: amount}),
		})

		const clientSecret = await res.json()

		const result = await stripe.confirmPayment({
		  //`Elements` instance that was used to create the Payment Element
		  clientSecret: clientSecret,
		  elements,
		  confirmParams: {
		    return_url: "http://localhost:3000/payment-confirm",
		  },
		});

		if (result.error) {
		} else {
		  // Your customer will be redirected to your `return_url`. For some payment
		  // methods like iDEAL, your customer will be redirected to an intermediate
		  // site first to authorize the payment, then redirected to the `return_url`.
		}
	};

	const createOrder_ = () => {
		let gameIds = [];
		cart.forEach((el) => {
			gameIds.push(el?.id);
		});
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        game: gameIds,
      },
    };
		OrderApis.createOrder(data)
			.then((res) => {
				if (res) {
					cart.forEach((el) => {
						CartApis.deleteCartItem(el?.id)
							.then((result) => {
              })
							.catch((err) => {
							});
					});
				}
			})
			.catch((err) => {
			});
	};

  const sendEmail = async () => {
		const res = await fetch('api/send-email', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				fullName: user.fullName,
				cart: cart,
				date: Date.now()
			})
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="mx-32 lg:mx-[320px] mt-12">
				<Suspense>
				<PaymentElement />
				<button className="bg-primary hover:bg-primary/80 text-white rounded-md w-full mt-4 p-2 duration-300">
					Submit
				</button>
				</Suspense>
			</div>
		</form>
	);
};

export default CheckoutForm;
