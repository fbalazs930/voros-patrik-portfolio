import React from 'react'

const Paginator = ({ photoPerPage, totalPhoto, paginate, }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPhoto / photoPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='paginator'>
            {pageNumbers.map(number => (
                <p key={number} className='page-number' onClick={(e) => {
                    paginate(number);
                    window.scrollTo(0, 333);
                }}>
                    {number}
                </p>
            ))}
        </div>
    )
}

export default Paginator;