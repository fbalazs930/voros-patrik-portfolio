import React from 'react';
import { Logos } from './Logos';

export const Contact = () => {
    return (
        <div className='contact'>
            <h1>
                Elérhetőségek:
            </h1>
            <a className="c" target='_blank' href="mailto:vpatrik2001@gmail.com" rel="noreferrer">
                <i className="fas fa-envelope"></i>
                vpatrik2001@gmail.com
            </a>
            <a className="c" target='_blank' href="tel:062012345678" rel="noreferrer">
                <i className="fas fa-phone-alt"></i>
                0620 428 5098
            </a>
            <Logos />
        </div>
    )
}
