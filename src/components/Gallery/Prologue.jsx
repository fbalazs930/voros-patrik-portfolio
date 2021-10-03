/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import featured from './Featured.jsx';

export const Prologue = () => {
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
        <div className='p'>
            <h1>Kiemelt képek</h1>
            <div className="images">
                {featured.map(img => (
                    <div key={img.id}>
                        <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                    </div>
                ))}
            </div>

            {click ? <>
                <FullImg images={featured} id={id} />
                <i className="fas fa-times" onClick={() => setClick(false)}></i>
            </> : null}
        </div>
    )
}
