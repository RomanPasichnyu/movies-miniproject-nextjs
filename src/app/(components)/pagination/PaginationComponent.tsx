'use client';
import React, {FC} from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: FC<PaginationProps> = ({currentPage, totalPages, onPageChange,}) => {
    return (
        <div>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>Prev
            </button>
            <span>Page {currentPage}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>Next
            </button>
        </div>
    );
};

export default PaginationComponent;
