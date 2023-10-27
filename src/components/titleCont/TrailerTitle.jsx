import React from 'react'
import './TrailerTitle.css'
import Glava2 from '../glava/Glava2'
import AllTrailer from '../nav/AllTrailer'

const TrailerTitle = () => {
    return (
        <div className='TT_nav'>
            <div><Glava2 /></div>
            <div className='TT_nav_r'>
                <AllTrailer />
                <img src="./src/assets/Arrow.svg" alt="" />
            </div>
        </div>
    )
}

export default TrailerTitle