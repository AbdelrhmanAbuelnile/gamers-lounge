'use client'
import React, { useEffect,useState } from 'react'
import gameApi from '../../_utils/gameApi'
import BreadCrumb from '../../_components/BreadCrumb'
import GameBanner from './_components/GameBanner'
import GameInfo from './_components/GameInfo'
import GamesList from '../../_components/GamesList'
import { usePathname } from 'next/navigation'

function page({params}) {
  const path = usePathname()
  const [gameDetials, setGameDetials] = useState({})
  const [gameList, setGameList] = useState([])

  const getGameById_ = () =>{
    gameApi.getGameById(params.gameId).then(res =>{
      setGameDetials(res.data.data)
      getGameByCategory_(res.data.data)
    })
  }
  const getGameByCategory_ =(game)=>{
    gameApi.getGameByCategory(game?.attributes.category).then(res =>{
      setGameList(res.data.data)
    })
  
  }
  useEffect(()=>{
    getGameById_()    
  },[])
  return (
    <div className='px-10 md:px-28 py-8'>
      <BreadCrumb path={path}/>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0'>
        <GameBanner game={gameDetials}/>
        <GameInfo game={gameDetials}/>
      </div>
      <div className='mt-24'>
        <h2 className='text-xl mb-4'>Similar Games</h2>
        <GamesList gamesList={gameList}/>
      </div>
    </div>
  )
}

export default page