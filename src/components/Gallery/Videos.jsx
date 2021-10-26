import React from 'react';


export const Videos = () => {
    
    return (
        <div className='videos p'>
            <h1>Videók</h1>
                <div className="video">
                    <iframe
                    src={`https://www.youtube.com/embed/P-L-grmh8-U`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
        </div>
    )
}
