'use client'
import Image from "next/image";
import React, {useState, useEffect, useRef} from "react";
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from "lucide-react";
import { useCart } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "../_components/Cart"
import Link from "next/link";

function Header() {
	const { user } = useUser();
	const cartRef = useRef(null)
	const [openCart, setOpenCart] = useState(false);
	const {cart, setCart} = useCart()
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(()=>{
		setIsLoggedIn(window.location.href.includes("sign-in") || window.location.href.includes("sign-up"))
	},[])
	useEffect(()=>{
		user && getCartItems()
	},[user,openCart])

	const getCartItems =()=>{
		CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res=>{
			setCart(res?.data?.data)
		}).catch(err=>{
		})
	}

	useEffect(()=>{
		if(openCart){
			document.addEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	},[openCart])

	const handleClickOutside = (event) => {
		if (cartRef.current && !cartRef.current.contains(event.target)) {
			setOpenCart(false);
		}
	};

	return !isLoggedIn && (
		<header className="bg-white">
			<div className="mx-auto flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
				<Link href={'/'}><Image src={"/logo.png"} alt="logo" width={50} height={50} /></Link>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<Link
									className="text-gray-500 transition hover:text-gray-500/75"
									href="/"
								>
									{" "}
									Home{" "}
								</Link>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						{!user ?  
							<div className="sm:flex sm:gap-4">
									<a
										className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/75"
										href="/sign-in"
									>
										Login
									</a>

									<a
										className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block"
										href="/sign-up"
									>
										Register
									</a>
							</div>
						:
						<div className="flex gap-5 items-center">
							<span className="flex gap-1 cursor-pointer" ref={cartRef} onClick={() => setOpenCart(!openCart)}>
							<ShoppingCart />
							{cart?.length}
							</span>
							<UserButton afterSignOutUrl="/"/>
							{openCart && <Cart setOpenCart={setOpenCart}/>}
						</div>
						}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
