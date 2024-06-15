import React from 'react'
import './StyleSheet/extra.css'

function ExtraCard({ imgURL, title, desc, prize }) {
    return (
        <div className='card-box'>
            <div className='img-box'>
                <img src={imgURL}></img>
            </div>
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-desc'>{desc}</h2>
            <h2 className='card-prize'>{prize}</h2>
        </div>
    )
}

export default ExtraCard