import React from 'react';

const Pagination = ({totalPages, changePage, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage == number ? 'active' : ''}`}>
                        <p onClick={() => changePage(number)} className='page-link'>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;