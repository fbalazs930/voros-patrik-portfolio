import React from 'react';

const Paginator = ({ photoPerPage, totalPhoto, paginate, }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPhoto / photoPerPage); i++) {
        pageNumbers.push(i);
    }
    let nums = document.querySelectorAll(".page-number");
    const remove = () => {
        nums.forEach(num => {
            num.className = "page-number";
        })
    }
    return (
        <div className='paginator'>
            {pageNumbers.map(number => {
                return <p key={number} className='page-number' onClick={(e) => {
                    remove();
                    e.target.className = "page-number clicked"
                    paginate(number);
                    window.scrollTo(0, 333);
                }}>
                    {number}
                </p>
            })}
        </div>
    )
}

export default Paginator;