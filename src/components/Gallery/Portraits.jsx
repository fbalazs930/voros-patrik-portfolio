/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ImagesDB from './Images.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Portraits = () => {
    const images = ImagesDB.portraits;
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
        <div className='portraits'>
            <h1>Portréfotók</h1>
            <div className="images">
                {images.map(img => (
                    <img key={img.id} src={img.src} alt="portré" onClick={() => clickHandler(img.id)} />
                ))}
            </div>


            {click ? <Carousel emulateTouch infiniteLoop autoPlay interval="10000" useKeyboardArrows stopOnHover selectedItem={id}>
                {images.map(img => (
                    <img key={img.id} className="img" src={img.src} alt="portré" />
                ))}
            </Carousel> : null}

        </div>
    )
}