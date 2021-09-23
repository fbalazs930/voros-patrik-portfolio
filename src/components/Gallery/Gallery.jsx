/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
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

    const [click2, setClick2] = useState(false);

    return (
        <div className='gallery'>
            <div>
                <h1>Munkáim</h1>
            </div>

            <div className="filters">
                <div className="top" onClick={() => setClick2(!click2)}>
                    <i className="fas fa-filter"></i>
                    <h2>Szűrés</h2>
                </div>
                {click2 ?
                    <div className="types">
                        <h2 onClick={() => { setIFilter("all") }}>Mind</h2>
                        <h2 onClick={() => { setIFilter("portrait") }}>Portré</h2>
                        <h2 onClick={() => { setIFilter("gastro") }}>Kávé / gasztró</h2>
                        <h2 onClick={() => { setIFilter("event") }}>Városi rendezvény</h2>
                        <h2 onClick={() => { setIFilter("landscape") }}>Táj</h2>
                    </div>
                    :
                    <div className="types">
                        &nbsp;
                    </div>
                }
            </div>



            {iFilter === "all" ?
                <div className="images">
                    {images.map(img => (
                        <div key={img.id}>
                            <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                        </div>
                    ))}
                </div>

                :

                <div className="images">
                    {images.map(img => {
                        if (img.type === iFilter) {
                            return <div key={img.id}>
                                <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                            </div>
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
