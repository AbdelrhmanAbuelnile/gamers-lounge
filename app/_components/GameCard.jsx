import Image from 'next/image'
import React from 'react'
import { List } from 'lucide-react';
import Link from 'next/link';

function GameCard({game}) {
  return (
    <>
      { 
        game.attributes?.banner?.data?.attributes?.url? 
        <Link href={`/game-details/${game?.id}`} className='p-1 border-primary rounded-lg hover-border hover:shadow-md cursor-pointer'>
          <Image
          src={game?.attributes?.banner?.data?.attributes?.url}
          alt='game banner'
          width={450}
          height={550} 
          className='rounded-t-lg h-[170px] object-cover w-full'
          />
          <div className='flex justify-between items-center bg-primary text-white rounded-b-lg p-3'>
            <div className='p-3'>
            <h2 className='text-sm font-medium line-clamp-1'>{game?.attributes?.title}</h2>
            <h2 className='text-xs font-medium underline text-gray-400 flex gap-1 items-center'>
              <List className='w-4 h-4'/>{game?.attributes?.category}</h2>
            </div> 
            <h2>{game?.attributes?.price === 0 ? "FREE" : game?.attributes?.price + "$"}</h2>
          </div>
        </Link>
        :
        <div className='w-[400px] h-[225px] bg-secondary/35 rounded-lg animate-pulse'></div>
      }
    </>
  )
}

export default GameCard