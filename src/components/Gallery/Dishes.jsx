/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Images from './Images.jsx';

export const Dishes = () => {
    const [id, setId] = useState(0);
    const [click, setClick] = useState(false);
    const exit = () => {
        setClick(false);
    }

    const updateId = e => {
        if (e.keyCode === 27) { exit() }
        if (e.keyCode === 37) { if (id - 1 >= 0) { setId(id - 1) } }
        if (e.keyCode === 39) {
            if (id + 1 <= Images.dishes.length - 1) {
                setId(id + 1);
            }
        }
    }
    useEffect(() => {
        window.addEventListener('keyup', updateId);
        return () => { window.removeEventListener('keyup', updateId); }
    }, [id])

    return (
        <div className='dishes'>
            <h1>Ételfotók</h1>
            <div className="images">
                {Images.dishes.map(img => (
                    <img key={img.id} src={img.src} alt="Étel" onClick={() => { setId(img.id); setClick(true) }} />
                ))}
            </div>
            {click &&
                <div className="full-image">
                    <img src={Images.dishes[id].src} alt="" />
                    <i className="fas fa-arrow-circle-left" onClick={() => {
                        if (id - 1 >= 0) { setId(id - 1) }
                    }}>
                    </i>
                    <i className="fas fa-arrow-circle-right" onClick={() => {
                        if (id + 1 <= Images.dishes.length - 1) { setId(id + 1) }
                    }}>
                    </i>
                    <i className="far fa-times-circle" onClick={() => exit()}></i>
                </div>
            }
        </div>
    )
}
