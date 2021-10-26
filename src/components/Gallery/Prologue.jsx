/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import fImages from './fImages';

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

    const [mobile, setMobile] = useState(false);
    const checkWidth = () => {
        if (window.innerWidth < 830) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener("load", checkWidth)
        window.addEventListener("resize", checkWidth)
        window.addEventListener("click", checkWidth)
        window.addEventListener("mouseover", checkWidth)
        return () => {
            window.removeEventListener("load", checkWidth)
            window.removeEventListener("resize", checkWidth);
            window.removeEventListener("click", checkWidth)
            window.removeEventListener("mouseover", checkWidth)
        }
    }, [])

    return (
        <div className='gallery p'>
            {mobile ?
                <div className="mobileGallery">
                    <FullImg images={fImages} id={id} />
                </div>

                :

                <>  
                    
                    <h1>Kiemelt fotók</h1>
                    <br />
                    <div className="images">
                        {fImages.map(img => (
                            <div className="img-container" key={img.id}>
                                <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                            </div>
                        ))}
                    </div>

                    {click ? <>
                        <div className="fullImg">
                            <FullImg images={fImages} id={id} />
                        </div>
                        <i className="fas fa-times" onClick={() => setClick(false)}></i>
                    </> : null}
                </>
            }
        </div>
    )
}
