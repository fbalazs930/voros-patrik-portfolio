import React from 'react';
import { Portraits } from './Portraits';
import { Dishes } from './Dishes';
import { Events } from './Events';

export const Gallery = () => {
    return (
        <div className='gallery'>
            <Portraits/>
            <Dishes/>
            <Events/>
        </div>
    )
}
