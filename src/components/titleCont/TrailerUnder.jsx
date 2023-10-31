import React from 'react'
import './TrailerUnder.css'
import NameFilmp from '../PfilmName/NameFilmp'
import Like from '../button/Like'
import Dlike from '../button/Dlike'

const TrailerUnder = () => {
    return (
        <div className="item_under_title">
            <NameFilmp />
            <div className="like_dlike">
                <Like />
                <Dlike />
            </div>
        </div>
    )
}

export default TrailerUnder