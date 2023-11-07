import React from 'react'
import './PopFilm.css'
import '../components/glava/Glava.css'
import Spisok2 from '../PopFilm/Spisok2.jsx'
import Line from '../components/line/Line.jsx'
import Card from '../components/card/Card'

const PopFilm = () => {
    return (
        <div className="popfilms">
            <div id='header_cont'>
                <h1 id="heading_1">Популярные фильмы</h1>
                <div className="line"><Line /></div>
                <div className="spisok"><Spisok2 /></div>
            </div>
<div className="popfilm_minfilm"><Card /></div>
        </div>
    )
}

export default PopFilm