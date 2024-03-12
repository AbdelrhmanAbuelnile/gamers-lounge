"use client"
import React, { useEffect,useState } from 'react'
import GamesList from './GamesList'
import gameApi from '../_utils/gameApi'
import GameCardSkeleton from './GameCardSkeleton'

function GameSection() {

  const [gamesList, setGamesList] = useState([])
  const [loading, setLoading] = useState(true)
  const getlatestGames_ = () => {
    gameApi.getLatestGames().then(res =>{
      setGamesList(res.data.data)
    })
    .catch(err=>{
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  useEffect(()=>{
    getlatestGames_()
  },[])

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-4 text-xl font-semibold text-secondary'>Our Latest Games</h2>
      {loading ? <GameCardSkeleton/>: <GamesList gamesList={gamesList}/>}
    </div>
  )
}

export default GameSection