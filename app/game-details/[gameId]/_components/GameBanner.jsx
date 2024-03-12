import Image from 'next/image'
import React from 'react'

function GameBanner({game}) {
  
  return (
    <div>
      {game?.attributes?.banner?.data?.attributes?.url?  <Image
        src={game?.attributes?.banner?.data?.attributes?.url}
        width={400} 
        height={400}
        alt={game?.attributes?.title + " banner"}
        className='rounded-lg'
      />
      :
      <div className='w-[400px] h-[225px] bg-secondary/35 rounded-lg animate-pulse'></div>}
    </div>
  )
}

export default GameBanner