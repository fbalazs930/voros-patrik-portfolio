import React from 'react'
import Images from './Images.jsx';

export const Events = () => {
    return (
        <div className='events'>
            <h1>Eseményfotók</h1>
            <div className="images">
                {Images.events.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" />
                ))}
            </div>
        </div>
    )
}
