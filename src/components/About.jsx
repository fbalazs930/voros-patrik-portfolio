import React from 'react';
import {Prologue} from './Gallery/Prologue';

export const About = () => {
    return (
        <div className='about'>
            <h1>{/* Magamról */}</h1>
            <div className="bottom">
                <div className="text">
                    <p>Vörös Patriknak hívnak egy vidéki kisvárosból származom. 20 éves vagyok  és szeretek emberekkel foglalkozni, szeretek pillanatokat megörökíteni a világból legyen az videó vagy fotó álltal és ezzel más embereknek is segítséget nyújtani vagy szebbé tenni napjaikat.</p>
                    <p>Ezen kívűl társalgós embernek tartom magam, szeretek beszélgetni, szórakozóhelyekre menni időnként akár a fényképezőgépemet is vinném minden hova és kreatívkodni, hogy milyen is más szemmel nézni a világot akár más ember szemszögéből is. Emellett szeretek utazni, kirándulni és elszabadítani a kreativitásom.</p>
                </div>
                <img className='own-portriat' src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-1/p100x100/90308479_2572523813074334_4305014315427037184_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XVCLEK8oJfQAX88fYHA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-vie1-1.xx&oh=ecc86ed62015051219197cf43d49b0da&oe=6171F374" alt="Én" />
            </div>
            <Prologue/>
        </div>
    )
}
