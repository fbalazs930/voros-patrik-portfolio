import React from 'react';
import { Portraits } from './Portraits';
import { Dishes } from './Dishes';

export const Gallery = () => {
    return (
        <div className='gallery'>
            <Portraits/>
            <Dishes/>
        </div>
    )
}
