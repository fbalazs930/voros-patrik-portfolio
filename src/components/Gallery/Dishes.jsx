import React from 'react'
import Images from './Images.jsx';

export const Dishes = () => {
    return (
        <div className='dishes'>
            <h1>Ételfotók</h1>
            <div className="images">
                {Images.dishes.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" />
                ))}
            </div>
        </div>
    )
}
