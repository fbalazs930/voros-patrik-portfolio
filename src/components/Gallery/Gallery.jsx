/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import images from './Images.jsx';
import Paginator from '../Paginator';


export const Gallery = () => {

    //CHANGING ARRAY FOR PAGINATOR
    const [array, setArray] = useState(images);

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

    const [click2, setClick2] = useState(false);//show filters


    const setFilterFn = (filter) => {
        setIFilter(filter);
        let i = 0;
        let temp = [];
        array.map(img => {
            if (img.type === iFilter) {
                img.id = i;
                temp.push(img);
                console.log(img.id);
                i++;
            }
        })
        setArray(temp);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [photoPerPage] = useState(14);

    const lastPhoto = currentPage * photoPerPage;
    //const [lastPhoto, setLastPhoto] = useState(currentPage * photoPerPage);
    const firstPhoto = lastPhoto - photoPerPage;
    //const [firstPhoto, setFirstPhoto] = useState(lastPhoto - photoPerPage);
    const currentPhotos = array.slice(firstPhoto, lastPhoto);
    //const [currentPhotos, setCurrentPhotos] = useState(images.slice(firstPhoto, lastPhoto));

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };


    return (
        <div className='gallery p'>
            <div>
                <h1>Fotók</h1>
            </div>

            <div className="filters">
                <div className="top" onClick={() => setClick2(!click2)}>
                    <i className="fas fa-filter"></i>
                    <h2>Szűrés</h2>
                </div>
                {click2 ?
                    <div className="types">
                        <h2 onClick={() => { setFilterFn("all") }}>Mind</h2>
                        <h2 onClick={() => { setFilterFn("portrait") }}>Portré</h2>
                        <h2 onClick={() => { setFilterFn("gastro") }}>Kávé / gasztró</h2>
                        <h2 onClick={() => { setFilterFn("event") }}>Városi rendezvény</h2>
                        <h2 onClick={() => { setFilterFn("landscape") }}>Táj</h2>
                        <h2 onClick={() => { setFilterFn("fest") }}>Fesztivál</h2>
                    </div>
                    :
                    <div className="types">
                        &nbsp;
                    </div>
                }
            </div>



            <div className="images">
                {currentPhotos.map(img => (
                    <div key={img.id}>
                        <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                    </div>
                ))}
            </div>

            {click ? <>
                <FullImg images={array} id={id} />
                <i className="fas fa-times" onClick={() => setClick(false)}></i>
            </> : null}
            <Paginator photoPerPage={photoPerPage} totalPhoto={array.length} paginate={paginate} />
        </div>
    )
}
