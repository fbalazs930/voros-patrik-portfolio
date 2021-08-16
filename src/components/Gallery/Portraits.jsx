import React from 'react'
import Images from './Images.jsx';

export const Portraits = () => {
    return (
        <div className='portraits'>
            <h1>Portréfotók</h1>
            <div className="images">
                {Images.portraits.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" />
                ))}
            </div>
        </div>
    )
}
