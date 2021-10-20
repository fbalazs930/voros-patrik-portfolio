import React from 'react';

export const About = () => {
    return (
        <div className='about'>
            <h1>{/* Magamról */}</h1>
            <div className="bottom">
                <div className="text">
                    <p>Vörös Patriknak hívnak egy vidéki kisvárosból származom. 20 éves vagyok  és szeretek emberekkel foglalkozni, szeretek pillanatokat megörökíteni a világból legyen az videó vagy fotó álltal és ezzel más embereknek is segítséget nyújtani vagy szebbé tenni napjaikat.</p>
                    <p>Ezen kívűl társalgós embernek tartom magam, szeretek beszélgetni, szórakozóhelyekre menni időnként akár a fényképezőgépemet is vinném minden hova és kreatívkodni, hogy milyen is más szemmel nézni a világot akár más ember szemszögéből is. Emellett szeretek utazni, kirándulni és elszabadítani a kreativitásom.</p>
                </div>
                <img className='own-portrait' src="https://i.postimg.cc/1tTZK8Ff/246059307-3055232674803443-6264445301328892051-n.jpg" alt="Portre" />
            </div>
        </div>
    )
}
