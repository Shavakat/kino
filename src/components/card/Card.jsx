import React from 'react'
import { useState, useSyncExternalStore, useEffect } from 'react'
import './Card.css'
import CardRating from './CardRating'

const Card = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/movies')
            .then(response => response.json())
            .then(json => setCard(json));
    }, []);

    return (
        <>
            {card.map((e) => {
                return <>
                    <div id='cardfilm'>
                        <div className='one_card'>
                            <CardRating averageRating={e.averageRating} />
                            <img className='imgcard' src={e.urlIcon} alt="" />
                        </div>
                        <p className="name_film">{e.localName}</p>
                        <p className="category_film">{e.genres}</p>
                    </div>
                </>
            })}
        </>
    )
}

export default Card