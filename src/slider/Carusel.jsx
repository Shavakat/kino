import React from 'react'
import Moviesmin from '../components/movies/Moviesmin'

const Carusel = () => {

  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      overflowX: 'scroll'
    }}>
      <Moviesmin />
    </div>
  )
}

export default Carusel