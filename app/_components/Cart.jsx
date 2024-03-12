import Link from "next/link";
import { useCart } from "../_context/CartContext";
import { useRouter } from 'next/navigation'

function Cart({setOpenCart}) {
	const { cart, setCart } = useCart();

	const getTotalAmount = ()=>{
    let total = 0
    cart?.map((game)=>total+=game?.attributes?.games?.data[0]?.attributes?.price)
    return total
  }
	const router = useRouter()
	return (
		<div
			className="
        h-[300px] w-[250px] bg-gray-100 z-10 
        rounded-md border shadow-sm
        absolute mx-10 right-10 top-12 p-5 overflow-auto
      "
		>
			<div className="mt-4 space-y-6">
				<ul className="space-y-4">
					{cart?.map((game) => (
						<li className="flex items-center gap-4" key={game?.id}>
							<img
								src={game?.attributes?.games?.data[0]?.attributes?.banner?.data?.attributes?.url}
								alt={game?.attributes?.games?.data[0]?.attributes?.title}
								className="size-16 rounded object-cover"
							/>

							<div>
								<h3 className="text-sm text-gray-900">{game?.attributes?.games?.data[0]?.attributes?.title}</h3>

								<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
									<div>
										<dt className="inline">{game?.attributes?.games?.data[0]?.attributes?.price}$</dt>
									</div>
								</dl>
							</div>
						</li>
					))}
				</ul>

				<div className="space-y-4 text-center">
					<Link
						href="/cart"
						className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
					>
						View my cart ({cart?.length})
					</Link>

					<button
						onClick={()=>router.push(`/checkout?amount=${getTotalAmount()}`)}
						className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 w-full"
					>
						Checkout
					</button>

					<button
						onClick={() => setOpenCart(false)}
						className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
					>
						Continue shopping
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
