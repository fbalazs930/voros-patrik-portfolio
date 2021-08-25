import React from 'react';
import { Portraits } from './Portraits';
import { Dishes } from './Dishes';
import { Events } from './Events';
import { Landscapes } from './Landscapes';

export const Gallery = () => {
    return (
        <div className='gallery'>
            <Portraits/>
            <Dishes/>
            <Events/>
            <Landscapes/>
        </div>
    )
}
