import React, { useState } from 'react'

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: Props) => {
    /**
     * Props for pagination
     */
    const { currentPage, totalPages, onPageChange } = props;

    return (   
        <>
            <div>
                <button 
                    onClick={() => onPageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button 
                    onClick={() => onPageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Pagination