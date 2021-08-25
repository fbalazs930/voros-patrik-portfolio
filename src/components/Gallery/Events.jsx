/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import ImagesDB from './ImagesByType.jsx';

export const Events = () => {
    const images = ImagesDB.events;
    const [click, setClick] = useState(false);
    const [id, setId] = useState(0);
    const clickHandler = (id) => {
        setClick(!click);
        setId(id);
    }
    const exit = () => {
        window.addEventListener("keyup", (e) => {
            if (e.keyCode === 27) setClick(false);
        });
    }
    useEffect(() => {
        window.addEventListener('keyup', exit);
        return () => { window.removeEventListener('keyup', exit) }
    }, [])
    return (
        <div className='events'>
            <h1>Rendezvényfotók</h1>
            <div className="images">
                {images.map(img => (
                    <img key={img.id} src={img.src} alt="rendezvény" onClick={() => clickHandler(img.id)} />
                ))}
            </div>

            <div className="mobile-images">
                <FullImg images={images} id={id} />
            </div>

            {click ? <>
                <FullImg images={images} id={id} />
                <i className="fas fa-times" onClick={() => setClick(false)}></i>
            </> : null}
        </div>
    )
}