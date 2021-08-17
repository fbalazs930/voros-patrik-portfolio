/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import ImagesDB from './Images.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Portraits = () => {
    const images=ImagesDB.portraits;
    const [click, setClick] = useState(false);
    return (
        <div className='portraits'>
            <h1>Portréfotók</h1>
            <div className="images">
                {images.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" />
                ))}
            </div>

            {click === true &&
                <Carousel className="carousel" emulateTouch autoPlay interval="4000" showThumbs="false" useKeyboardArrows stopOnHover>
                    {images.map(img => (
                        <div key={img.id}>
                            <img src={img.src} alt="portré" />
                        </div>
                    ))}
                </Carousel>
            }
        </div>
    )
}