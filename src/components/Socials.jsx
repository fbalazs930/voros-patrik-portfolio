import React, { useState } from 'react'
import { Logos } from './Logos'
import { Link } from 'react-router-dom';

export const Socials = () => {
    const [click, setClick] = useState(false);
    return (
        <div className='socials'>
            <h1>Közösségi média</h1>
            <Logos />

            <Link to={{
                pathname: '/magamrol'
            }}
                onClick={() => { setClick(true) }}
            >
                Rólam
            </Link>
        </div>
    )
}
