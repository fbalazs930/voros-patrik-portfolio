/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { FullImg } from './FullImg.jsx';
import images from './Images.jsx';
import Paginator from '../Paginator';

export const Gallery = () => {

    //CHANGING ARRAY FOR PAGINATOR
    const [array, setArray] = useState(images);

    //#region bigImg
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
    //#endregion

    //#region Filters
    const [click2, setClick2] = useState(false);//show filters
    const [selected, setSelected] = useState("");

    const setFilterFn = (filter) => {
        setClick2(false);
        setCurrentPage(1);

        switch (filter) {
            case "poDell":
                setSelected("Portré / Modell");
                break;
            case "gastro":
                setSelected("Gasztro");
                break;
            case "event":
                setSelected("Városi rendezvény");
                break;
            case "landscape":
                setSelected("Táj");
                break;
            case "fest":
                setSelected("Fesztivál");
                break;
            case "all":
                setSelected("");
                break;
            default: ;
                break;
        }

        let temp = [];
        let i = 0;
        if (filter === "all") {
            images.map(img => {
                img.id = i;
                temp.push(img);
                i++;
            })
        }
        else {
            images.map(img => {
                if (img.type === filter) {
                    img.id = i;
                    temp.push(img);
                    i++;
                }
            })
        }
        setArray(temp);
    }
    //#endregion

    //#region Paginator
    const [currentPage, setCurrentPage] = useState(1);
    const [photoPerPage, setPhotoPerPage] = useState(12);

    const lastPhoto = currentPage * photoPerPage;
    const firstPhoto = lastPhoto - photoPerPage;

    const currentPhotos = array.slice(firstPhoto, lastPhoto);

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };

    //#endregion

    const [mobile, setMobile] = useState(false);
    const checkWidth = () => {

        if(window.innerWidth > 1760){
            setPhotoPerPage(12);
        }
        if(window.innerWidth < 1760){
            setPhotoPerPage(10);
        }
        if(window.innerWidth < 1530){
            setPhotoPerPage(12);
        }
        if(window.innerWidth < 940){
            setPhotoPerPage(9);
        }
        if (window.innerWidth < 830) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", checkWidth)
        window.addEventListener("load", checkWidth)
        window.addEventListener("click", checkWidth)
        window.addEventListener("mouseover", checkWidth)
        return () => {
            window.removeEventListener("resize", checkWidth);
            window.removeEventListener("load", checkWidth)
            window.removeEventListener("click", checkWidth)
            window.removeEventListener("mouseover", checkWidth)
        }
    }, [])


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
                        <h2 className="filt" onClick={() => { setFilterFn("all") }}>Mind</h2>
                        <h2 className="filt" onClick={() => { setFilterFn("poDell") }}>Portré / Modell</h2>
                        <h2 className="filt" onClick={() => { setFilterFn("gastro") }}>Gasztro</h2>
                        <h2 className="filt" onClick={() => { setFilterFn("event") }}>Városi rendezvény</h2>
                        <h2 className="filt" onClick={() => { setFilterFn("landscape") }}>Táj</h2>
                        <h2 className="filt" onClick={() => { setFilterFn("fest") }}>Fesztivál</h2>
                    </div>
                    :
                    <div className="types">
                        &nbsp;
                    </div>
                }
            </div>



            {mobile ?
                 <>
                    <div className="mobileGallery">
                            <FullImg images={array} id={id} />
                    </div>
                </>
                :
                <>
                    <h1>{selected}</h1>
                    <div className="images">
                        {currentPhotos.map(img => (
                            <div className="img-container" key={img.id}>
                                <img src={img.src} alt="kep" onClick={() => clickHandler(img.id)} />
                            </div>
                        ))}
                    </div>

                    {click ? <>
                        <div className="fullImg">
                            <FullImg images={array} id={id} />
                        </div>
                        <i className="fas fa-times" onClick={() => setClick(false)}></i>
                    </> : null}
                    <Paginator photoPerPage={photoPerPage} totalPhoto={array.length} paginate={paginate} />
                </>
            }
        </div>
    )
}
