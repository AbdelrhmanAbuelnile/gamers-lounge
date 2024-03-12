import React from 'react'

function SkeletonGameInfo() {
  return (
    <div className='flex flex-col gap-5'>
			<div className='h-[20px]
		w-[400px] bg-secondary/35
		animate-pulse'>
			</div>
			<div className='h-[20px]
		w-[70px] bg-secondary/35
		animate-pulse'>
			</div>
			<div className='h-[20px]
		w-[400px] bg-secondary/35
		animate-pulse'>
			</div>
			<div className='h-[20px]
		w-[400px] bg-secondary/35
		animate-pulse'>
			</div><div className='h-[20px]
		w-[400px] bg-secondary/35
		animate-pulse'>
			</div>
			<div className='h-[20px]
		w-[100px] bg-secondary/35
		animate-pulse'>
			</div>
		</div>
  )
}

export default SkeletonGameInfo