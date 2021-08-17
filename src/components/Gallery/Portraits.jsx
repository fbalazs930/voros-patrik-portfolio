/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Images from './Images.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Portraits = () => {

    return (
        <div className='portraits'>
            <h1>Portréfotók</h1>
            <Carousel className="carousel" emulateTouch autoPlay interval="4000" showThumbs="false" useKeyboardArrows stopOnHover>
                {Images.portraits.map(img => (
                    <div key={img.id}>
                        <img src={img.src} alt="portré" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}