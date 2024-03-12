'use client'
import { InfoIcon, ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react'
import SkeletonGameInfo from './SkeletonGameInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_utils/CartApis'
import { useCart } from '../../../_context/CartContext'

function GameInfo({game}) {
  const {cart, setCart} = useCart()
  const router = useRouter()
  const {user} = useUser()
  const handleAddToCart = () => {
    if (!user) {
			router.push('/sign-in')
		} else {
			/*logic to add to cart*/
			const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					games: [game?.id]
				}
			}
			CartApis.addToCart(data).then(res => {
        setCart(oldCart => [
          ...oldCart,
					{
						id: res?.data?.data?.id,
						game
					}
        ])
      }).catch(err=>{
      })
    }
  }

  return (
    <>
      { game.id ? 
      <div>
        <h2 className='text-xl font-semibold'>{game?.attributes?.title}</h2>
        <h2 className='text-sm text-gray-400 font-medium'>{game?.attributes?.category}</h2>
        <p className='text-sm mt-5'>{game?.attributes?.description[0]?.children[0]?.text}</p>
        <h2 className='text-3xl text-primary mt-3 font-semibold'>{game?.attributes?.price == 0 ? 'Free' :"$"+game?.attributes?.price}</h2>
        { !game?.attributes?.instantDelivery && <h2 className='text-xs text-secondary my-2 flex gap-2 items-center'><InfoIcon width={15} height={15}/> Availbe Septemper 5TH</h2>}
        <button onClick={() => handleAddToCart()} className='flex gap-2 bg-primary text-white rounded-md hover:bg-primary/85 duration-150 p-3'><ShoppingCart /> Add To Cart</button>
      </div>
      :
      <SkeletonGameInfo />}
    </>
  )
}

export default GameInfo