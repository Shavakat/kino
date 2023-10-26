import React from 'react'
import './Card.css'
import CardRating from './CardRating'

const Card = () => {
    return (
        <div id='cardfilm'>
            <div className='one_card'>
                <CardRating />
                <img className='imgcard' src="src/img/garrypotter.png" alt="" />
            </div>
            <p className="name_film">Побег из Претории</p>
            <p className="category_film">Триллер</p>

        </div>
    )
}

export default Card