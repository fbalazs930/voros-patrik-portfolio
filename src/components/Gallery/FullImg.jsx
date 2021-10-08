import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const FullImg = (props) => {
    return (
        <Carousel autoFocus emulateTouch infiniteLoop useKeyboardArrows stopOnHover preventMovementUntilSwipeScrollTolerance selectedItem={props.id} swipeScrollTolerance={30}>
            {props.images.map(img => (
                <img key={img.id} className="img" src={img.src} alt="kep" />
            ))}
        </Carousel>
    )
}
