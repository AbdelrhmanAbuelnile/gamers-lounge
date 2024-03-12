import React from 'react'
import GameCard from './GameCard'

function GamesList({gamesList}) {
  return (
    <div className='grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
    {gamesList.map( game => (
      <div key={game.id}>
        <GameCard game={game}/>
      </div>  
    ))}
    </div>    
    )
}

export default GamesList