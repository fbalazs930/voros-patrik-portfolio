/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
/* import { Portraits } from './Portraits';
import { Dishes } from './Dishes';
import { Events } from './Events';
import { Landscapes } from './Landscapes'; */

import { FullImg } from './FullImg.jsx';
import images from './Images.jsx';


export const Gallery = () => {
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

    const [iFilter, setIFilter] = useState("all");



    return (
        <div className='gallery'>
            <div>
                <h1>Galéria</h1>
            </div>
            {/* <Portraits/>
            <Dishes/>
            <Events/>
            <Landscapes/>*/}

            <div className="filters">
                <h2 onClick={() => { setIFilter("all") }}>Mind</h2>
                <h2 onClick={() => { setIFilter("portrait") }}>Portré</h2>
                <h2 onClick={() => { setIFilter("gastro") }}>Étel</h2>
                <h2 onClick={() => { setIFilter("event") }}>Rendezvény</h2>
                <h2 onClick={() => { setIFilter("landscape") }}>Táj</h2>
            </div>



            {iFilter === "all" ?
                <div className="images">
                    {images.map(img => (
                        <img key={img.id} src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                    ))}
                </div>

                :

                <div className="images">
                    {images.map(img => {
                        if (img.type === iFilter) {
                            return <img key={img.id} src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                        }
                    }
                    )}
                </div>
            }

            {click ? <>
                <FullImg images={images} id={id} />
                <i className="fas fa-times" onClick={() => setClick(false)}></i>
            </> : null}
        </div>
    )
}
