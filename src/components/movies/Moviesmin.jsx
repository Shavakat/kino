import React from 'react'
import { useState, useSyncExternalStore, useEffect } from 'react'
import './Moviesmin.css'
import './Movies.css'
import TrailerUnder from '../titleCont/TrailerUnder';

const Moviesmin = () => {


    const [card, setCard] = useState([]);

    const [selected, setSelected] = useState(0)


    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/movies')
            .then(response => response.json())
            .then(json => setCard(json));
    }, []);

    return (
        <>
            <div className="trailer_img_item">
                <img className="trailer_img_play" src='src/assets/Play.svg' alt="" />
                <img className="trailer_img" src={card[selected]?.urlIcon} alt="" />
            </div>
            <TrailerUnder />
            <div className="triler_cont" style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'scroll'
            }}>
                {card.map((e, index) => {
                    return <div onClick={() => {
                        setSelected(index)
                    }} className="trailer" >
                        <div className="mini_film">
                            <div className="trailer_img_item_min">
                                <img className="trailer_img_play_min" src='src/assets/Play.svg' alt="" />
                                <img className="trailer_img_min" src={e.urlIcon} alt="" />
                            </div>
                            <p className="mini_f_name">{e.localName}</p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Moviesmin