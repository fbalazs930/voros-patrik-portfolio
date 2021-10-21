/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import images from './Images';

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

    let fImages = [];
    const[imgs,setImgs]=useState([]);
    useEffect(()=>{
        images.forEach(img =>{
            if(img.isFeatured === true){
                fImages.push(img);
            }
        })
        setImgs(fImages);
    }, [])

    return (
        <div className='prologue'>
            <h1>Kiemelt képek</h1>
            <div className="PRimages">
                {imgs.map(img => {
                    <div className="img-container" key={img.id}>
                    <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                </div>
                })}
            </div>

            {click ? <>
                <div className="fullImg">
                    <FullImg images={imgs} id={id} />
                </div>
                <i className="fas fa-times" onClick={() => setClick(false)}></i>
            </> : null}
        </div>
    )
}
