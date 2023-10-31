import React from 'react'
import { useState, useSyncExternalStore, useEffect } from 'react'
import './CardRating.css'

const CardRating = ({
  averageRating
}) => {
  return (
    <>
          <div className='ratingCard'>{averageRating}</div>
    </>
  )
}

export default CardRating