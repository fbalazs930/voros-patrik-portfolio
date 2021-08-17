/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ImagesDB from './Images.jsx';

export const Events = () => {    
    const images=ImagesDB.events;
    return (
        <div className='events'>
            <h1>Rendezvényfotók</h1>
            <div className="images">
                {images.map(img => (
                    <img key={img.id} src={img.src} alt="Étel"/>
                ))}
            </div>
        </div>
    )
}