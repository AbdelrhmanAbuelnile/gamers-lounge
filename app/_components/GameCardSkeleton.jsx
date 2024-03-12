import React from 'react'

function GameCardSkeleton() {
  const skeleton = Array(6).fill(0)
  return (
    <>
    <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
      {skeleton.map((fake,index)=> (
        <div key={index} className=' bg-gray-500/35 rounded-lg animate-pulse'>
          <div className='rounded-t-lg h-[170px] object-cover w-full bg-gray-500/40 animate-pulse'></div>
          <div className='flex justify-between items-end bg-gray-500/40 rounded-b-lg p-3'>
            <div className='w-full flex flex-col justify-between items-start gap-3'>
              <h2 className='h-3 w-3/4 bg-gray-500/40 animate-pulse'></h2>
              <h2 className='h-3 w-1/4 bg-gray-500/40 animate-pulse'></h2>
            </div> 
            <h2 className='h-3 w-1/4 bg-gray-500/40 animate-pulse'></h2>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default GameCardSkeleton