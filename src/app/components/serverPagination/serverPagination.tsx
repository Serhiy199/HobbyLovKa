import Link from 'next/link';
import React from 'react';
import css from './serverPagination.module.css';

export default function ServerPagination({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) {
    return (
        <div className={css.list}>
            <Link
                href={`/catalog/?page=${currentPage - 1}`}
                className={`${
                    currentPage === 1
                        ? 'hidden'
                        : 'flex items-center justify-center dark:bg-dark dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
                }`}
            >
                Previous
            </Link>
            {Array.from({ length: totalPages }, (_, index) => (
                <div key={index}>
                    <Link
                        href={`/catalog/?page=${index + 1}`}
                        className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                            currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-500 border-gray-300 dark:bg-dark dark:text-light hover:bg-gray-100 hover:text-gray-700'
                        }`}
                    >
                        {index + 1}
                    </Link>
                </div>
            ))}
            <Link
                href={`/catalog/?page=${currentPage + 1}`}
                className={`${
                    totalPages === currentPage
                        ? 'hidden'
                        : 'flex items-center justify-center dark:bg-dark dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
                }
        `}
            >
                Next
            </Link>
        </div>
    );
}
