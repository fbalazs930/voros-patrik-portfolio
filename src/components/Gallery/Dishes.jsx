/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ImagesDB from './Images.jsx';

export const Dishes = () => {    
    const images=ImagesDB.dishes;
    return (
        <div className='dishes'>
            <h1>Ételfotók</h1>
            <div className="images">
                {images.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" />
                ))}
            </div>
        </div>
    )
}